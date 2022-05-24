const express = require('express')
const path = require('path')
// npm i dotenv
require('dotenv').config({path: path.join(__dirname, './env/server.env')})
const mysql = require('./db/db')
app = express()

const port = process.env.WEB_PORT || 3000
/*
mysql.getConnection((err, connection) => {
    if(err) {
        console.log('MySQL 데이터베이스 접속이 실패되었습니다. 설정을 확인 하세요.')
    }
    else {
        console.log('MySQL 데이터베이스에 정상적으로 접속되었습니다.')
        connection.release()
    }    
})
*/
app.get('/',(req, res) => {
    
    const sql = `
                 select Host 
                      , User 
                   from user 
                  where 1=1 
                `
    try {
        mysql.getConnection((err, connection) => {            
            if(err) {
                console.log('MySQL 데이터베이스 접속이 실패되었습니다 : '+err)  
                res.status(500).send('message: 접속에러 : '+err)
                throw err
            }
            else {
                connection.query(sql, (err, result, fields) => {
                    if(err) {
                        console.log('sql에 에러 발생 : '+err)
                        res.status(500).send('message: sql에러 : '+err)
                    }
                    else
                    {
                        console.log('실행 : '+sql)
                        console.log('결과Row수 : '+result.length)
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
                })
                connection.release()
            }
        })        
    }
    catch(err){
        console.log('connection_pool GET Error / '+err)        
    }
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
