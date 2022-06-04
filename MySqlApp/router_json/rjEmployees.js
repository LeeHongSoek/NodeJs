const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../_MySqlDatabase/connection')                                 
const employeesInfo = require('../router_info/iEmployees')
const pageInfo = require('../router_info/iPaging')

// 사용예 : >curl -X GET localhost:3000/json/employeesList
router.use('/', (req, res) => {

    //var a = req.query.employeeName;
    //var b = req.query.contactLastName; 
    //console.log("a : " + a + " / b : " + b)    

    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log( JSON.stringify(req.query))

    if (pool.isConnected === false) {
        console.log(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
        return res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)
    }

    pool.getConnection((err, connection) => { 
        
        var sqlLastSelect = employeesInfo.selectSql // select 문!!
        var currPage = 1 // 초기 페이지 (첫페이지 & 변동가능)
        
        var keysQuery = Object.keys(req.query); // 검색 키 값들을 화면에서 가져옵니다.
        for (var keyQuery in keysQuery) {
            
            var fieldName = keysQuery[keyQuery]
            console.log("query key:value : " + fieldName + "=" + req.query[fieldName])

            if (fieldName==='currPage') {
                currPage = eval(req.query[fieldName])                
            }

            var keysSearchs = Object.keys(employeesInfo.searchs); // 등록된 검색 키를 대조해서 쿼리를 구성한다.
            for (var keysSearchs in keysSearchs) {
                if ((keyQuery === keysSearchs) && (req.query[fieldName] !='')) {
                    sqlLastSelect = sqlLastSelect + `\n   AND  ${fieldName} like '${req.query[fieldName]}%' `
                }
            }
        }  

        employeesInfo.totalRowSql = sqlLastSelect  // 총 건수를 구하기 위한 쿼리를 구성한다
        var totalRowSql = employeesInfo.totalRowSql
        

        connection.query(totalRowSql, (err, result, fields) => {
            if(err) {
                console.log(`totalRowSql 에 에러 발생 : ${err}`)

                res.status(500).send({
                    seccess : false, 
                    message : 'totalRowSql 에 에러 발생',
                    sql     : totalRowSql,
                    err
                })
            }
            else
            {
                console.info(`실행 : ${totalRowSql}`)
                console.info(`Row수 : ${result.length}`)

                pageInfo.totalRow = result[0].total_row // 총 레코드 수
                pageInfo.currPage = currPage // 초기 페이지 (첫페이지 & 변동가능)

                sqlLastSelect += ` limit ${pageInfo.limitFrom}, ${pageInfo.limitTo} ` // 페이지에 해당하는 limit가 구성되었다...

                connection.query(sqlLastSelect, (err, result, fields) => {
                    if(err) {
                        console.log(`sqlLastSelect 에 에러 발생 : ${err}`)
        
                        res.status(500).send({
                            seccess : false, 
                            message : 'sqlLastSelect 에 에러 발생',
                            sql     : sqlLastSelect,
                            err
                        })
                    }
                    else
                    {
                        console.info(`실행 : ${sqlLastSelect}`)
                        console.info(`Row수 : ${result.length}`)
                        //console.info(`result : ${ JSON.stringify(result,null,2)}`)
        
                        res.status(200).send({
                            success : true,
                            message : `${result.length}개의 레코드를 리턴합니다.`,
                            length  : result.length,
                            pageInfo,
                            result
                        });    
                        
                        console.info(`sqlLastSelect 정싱실행!`)
                    }
                })

                console.info(`totalRowSql 정싱실행!`)
            }
        })
        
        connection.release()
    })    
})

// 사용예 : >curl -X GET localhost:3000/json/employees/?
// 사용예 : >curl -X DELETE localhost:3000/json/employees/?
router.use('/:employeeNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    if (pool.isConnected === false) {
        console.log(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
        return res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)
    }

    pool.getConnection((err, connection) => {
        
        if (req.method === 'GET') {
            connection.query(employeesInfo.selectSqlOne, [req.params.employeeNumber], (err, result, fields) => {
                if(err) {
                    console.log(`sql에 에러 발생 : ${err}`)

                    res.status(500).send({
                        seccess : false, 
                        message : 'sql에 에러 발생',
                        sql     : employeesInfo.selectSql,
                        err
                    })                
                }
                else
                {
                    console.info(`실행 : ${employeesInfo.selectSql}`)
                    console.info(`Row수 : ${result.length}`)
                    //console.info(`result : ${ JSON.stringify(result,null,2)}`)

                    res.status(200).send({
                        success : true,
                        message : `${result.length}개의 레코드를 리턴합니다.`,
                        length  : result.length,
                        result
                    });

                    console.info(`sql 정싱실행!`)
                }
            })            
        }
        
        if (req.method === 'DELETE') {
            connection.query(deleteSqlOne, [req.params.employeeNumber], (err,rows, fields) => {
                if(err) {
                    console.log(`sql에 에러 발생 : ${err}`)

                    res.status(500).send({
                        seccess : false, 
                        message : `sql에러 : ${err}`,
                        sql     : employeesInfo.deleteSqlOne,
                    })                
                } 
                else {
                    res.status(200).send({
                        success : true,
                        message: `${rows.affectedRows} 개의 레코드가 적용되었습니다.`
                    });
                }
            })    
        }
        connection.release()
    })    
})

module.exports = router
