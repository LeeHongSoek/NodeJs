const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../database/connection')                                 

let mysal_coonected = false // 접속 성공여부를 저장 true/false
pool.getConnection((err, connection) => {
    if(err) {
        console.log(`MySql 데이터베이스 접속이 실패되었습니다 : ${err}`)
        mysal_coonected = false
    }
    else {
        mysal_coonected = true 
        console.log('MySql 데이터베이스에 정상적으로 접속되었습니다.')
        connection.release()
    }    
})


// 사용예 : >curl localhost:3000/users/1
router.get('/list', (req, res) => {
    console.log(` ${req.originalUrl} 요청 `)        
    console.log(` mysal_coonected = ${mysal_coonected} `)        
    
    if (mysal_coonected === false) {
        console.log(` ${req.originalUrl} 요청 : 이미 MySql 데이터베이스 접속이 실패되어 있습니다.`)        
        console.log(` req.params = ${ JSON.stringify(req.params,null,2)}`)        
    
        if (req.params.gubun === "view") {                 
            return res.send(`이미 MySql 데이터베이스 접속이 실패되어 있습니다.`)
        }
        if (req.params.gubun === "json") {
            res.send({
                seccess: false, 
                message: '이미 MySql 데이터베이스 접속이 실패되어 있습니다.'
            })
        }        
    }

    pool.getConnection((err, connection) => {            
        const sql = `  select employeeNumber
                            , lastName
                            , firstName
                            , extension
                            , email
                            , officeCode
                            , reportsTo
                            , jobTitle
                         from employees 
                        where 1=1 
                    `
        connection.query(sql, (err, result, fields) => {
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
                console.info(`실행 : ${sql}`)
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
        connection.release()
    })    
})


module.exports = router
