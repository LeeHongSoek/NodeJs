const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../database/connection')                                 

const selectSql = `select employeeNumber
                        , lastName
                        , firstName
                        , extension
                        , email
                        , officeCode
                        , reportsTo
                        , jobTitle
                    from employees 
                   where 1=1 
                     and del = 'N'
                  `
const deleteSql = `update employees 
                      set del = 'Y'   
                    where employeeNumber = ?  
                  `

// 사용예 : >curl localhost:3000/
router.use('/:employeeNumber', (req, res) => {
    
    console.log(` pool.isConnected = ${pool.isConnected} `)        
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log(` req.params.gubun = ${req.params.gubun}`)
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    if (pool.isConnected === true) {
        pool.getConnection((err, connection) => {            
            if (req.method === 'GET') {
                connection.query(selectSql, (err, result, fields) => {
                    if(err) {
                        console.log(` ${req.originalUrl} 요청 : sql에 에러 발생 : ${err}`)
                        if (req.params.gubun === "view") {                 
                            res.status(500).send(`message: sql에러 : ${err}`)
                        }
                        if (req.params.gubun === "json") {
                            res.status(500).send({
                                seccess: false, 
                                message: '쿼리의 내용이 없읍니다.'
                            })
                        }                
                    }
                    else
                    {
                        console.info(`실행 : ${selectSql}`)
                        console.info(`Row수 : ${result.length}`)
                        //console.info(`result : ${ JSON.stringify(result,null,2)}`)

                        if (req.params.gubun === "view") {
                            res.render('employees/list',{title:"직원리스트", result: result});
                        }
                        if (req.params.gubun === "json") {
                            if(result.length === 0){
                                res.status(400).send({
                                    seccess: true, 
                                    message: '쿼리의 내용이 없읍니다.',
                                    result
                                })
                            }
                            else{
                                res.status(200).send({
                                    success : true,
                                    message: `${result.length}개의 레코드를 리턴합니다.`,
                                    result
                                });
                            }
                        }
                        console.info(` ${req.originalUrl} 요청 : sql 정싱실행!`)
                    }
                })
                
            }
            if (req.method === 'DELETE') {
                connection.query(deleteSql, [req.params.employeeNumber], (err,rows, fields) => {

                    res.status(200).send({
                        success : true,
                        message: `${rows.affectedRows} 개의 레코드를 리턴합니다.`,
                        rows
                    });
                    /*
                    if(err) {
                        console.log(` ${req.originalUrl} 요청 : sql에 에러 발생 : ${err}`)
                        if (req.params.gubun === "view") {                 
                            res.status(500).send(`message: sql에러 : ${err}`)
                        }
                        if (req.params.gubun === "json") {
                            res.status(500).send({
                                seccess: false, 
                                message: '쿼리의 내용이 없읍니다.'
                            })
                        }                
                    } */                   
                })    
            }
            connection.release()
        })
    }
})


module.exports = router
