const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../database/connection')                                 

const selectSql = ` SELECT employeeNumber
                         , lastName
                         , firstName
                         , extension
                         , email
                         , officeCode
                         , reportsTo
                         , jobTitle
                      FROM employees 
                     WHERE del = 'N'
                  `
const selectSqlOne = ` SELECT employeeNumber
                            , lastName
                            , firstName
                            , extension
                            , email
                            , officeCode
                            , reportsTo
                            , jobTitle
                         FROM employees 
                        WHERE del = 'N'
                          AND employeeNumber = ?  
                     `
const deleteSqlOne = ` UPDATE employees 
                          SET del = 'Y'   
                        WHERE employeeNumber = ?  
                     `

// 사용예 : >curl -X GET localhost:3000/json/employees
router.get('/', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)

    if (pool.isConnected === false) {
        console.log(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
        return res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)
    }

    pool.getConnection((err, connection) => {            
        connection.query(selectSql, (err, result, fields) => {
            if(err) {
                console.log(`sql에 에러 발생 : ${err}`)

                res.status(500).send({
                    seccess : false, 
                    message : 'sql에 에러 발생',
                    sql     : selectSql,
                    err
                })
            }
            else
            {
                console.info(`실행 : ${selectSql}`)
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
            connection.query(selectSqlOne, [req.params.employeeNumber], (err, result, fields) => {
                if(err) {
                    console.log(`sql에 에러 발생 : ${err}`)

                    res.status(500).send({
                        seccess : false, 
                        message : 'sql에 에러 발생',
                        sql     : selectSql,
                        err
                    })                
                }
                else
                {
                    console.info(`실행 : ${selectSql}`)
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
                        sql     : selectSql,
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