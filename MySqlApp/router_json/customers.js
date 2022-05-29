const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../database/connection')                                 
const table_info = require('../../router_data/customers')

// 사용예 : >curl -X GET localhost:3000/json/customers
router.use('/', (req, res) => {

    //var a = req.query.customerName;
    //var b = req.query.contactLastName; 
    //console.log("a : " + a + " / b : " + b)    

    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log( JSON.stringify(req.query))

    if (pool.isConnected === false) {
        console.log(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
        return res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)
    }

    pool.getConnection((err, connection) => {                   

        var sql = table_info.selectSql
        var keys1 = Object.keys(req.query); //키를 가져옵니다. 이때, keys 는 반복가능한 객체가 됩니다.
        for (var key1 in keys1) {
            console.log("key : " + key1 + ", value : " + req.query[key1])
            var keys2 = Object.keys(table_info.searchs); //키를 가져옵니다. 이때, keys 는 반복가능한 객체가 됩니다.
            for (var key2 in keys2) {
                if ((key1 === key2) && (req.query[key1] !='')) {
                    sql = sql + `\n   AND  ${key1} like '${req.query[key1]}%' `
                }
            }
        }

        connection.query(sql, (err, result, fields) => {
            if(err) {
                console.log(`sql에 에러 발생 : ${err}`)

                res.status(500).send({
                    seccess : false, 
                    message : 'sql에 에러 발생',
                    sql     : sql,
                    err
                })
            }
            else
            {
                console.info(`실행 : ${sql}`)
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

        connection.release()
    })    
})

// 사용예 : >curl -X GET localhost:3000/json/customers/?
// 사용예 : >curl -X DELETE localhost:3000/json/customers/?
router.use('/:employeeNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    if (pool.isConnected === false) {
        console.log(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
        return res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)
    }

    pool.getConnection((err, connection) => {
        
        if (req.method === 'GET') {
            connection.query(table_info.selectSqlOne, [req.params.employeeNumber], (err, result, fields) => {
                if(err) {
                    console.log(`sql에 에러 발생 : ${err}`)

                    res.status(500).send({
                        seccess : false, 
                        message : 'sql에 에러 발생',
                        sql     : table_info.selectSql,
                        err
                    })                
                }
                else
                {
                    console.info(`실행 : ${table_info.selectSql}`)
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
                        sql     : table_info.deleteSqlOne,
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
