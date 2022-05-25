const express = require('express')
const path = require('path')
// npm i dotenv
require('dotenv').config({path: path.join(__dirname, './env/server.env')})
const pool = require('./db/db')
app = express()

const port = process.env.WEB_PORT || 3000

let mysal_coonected = false // 접속 성공여부를 저장

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

app.get('/',(req, res) => {    
    console.log(` / 호출 : 지금 MySql 데이터베이스 접속이 ${mysal_coonected} 입니다.`)
    return res.status(200).send(`지금 MySql 데이터베이스 접속이 ${mysal_coonected} 입니다.`)
})

app.get('/list',(req, res) => {    
    if (mysal_coonected === false) {
        console.log(` /list 호출 : 이미 MySql 데이터베이스 접속이 실패되어 있습니다.`)        
        return res.status(500).send(`이미 MySql 데이터베이스 접속이 실패되어 있습니다.`)            
    }

    pool.getConnection((err, connection) => {            
            const sql = `
                    select employeeNumber
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
                    console.log(` /list 호출 : sql에 에러 발생 : ${err}`)
                    res.status(500).send(`message: sql에러 : ${err}`)
                }
                else
                {
                    console.log(`실행 : ${sql}`)
                    console.log(`Row수 : ${result.length}`)
                    console.log(`result : ${ JSON.stringify(result,null,2)}`)

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
                    console.log(` /list 호출 : sql 정싱실행!`)
                }
            })
            connection.release()

    })    
 
})

server = app.listen(port, () => console.log(`Server Start Listening on port ${port}`))

//

var readline = require('readline')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("프로그램 종료!", answer) 
    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
})

// pc에서 수정 했음