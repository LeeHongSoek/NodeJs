const express = require('express')
const path = require('path')
// npm i dotenv
require('dotenv').config({path: path.join(__dirname, './env/server.env')})
const mysql = require('./db/db')

app = express()

const port = process.env.WEB_PORT || 3000

mysql.getConnection((err, connection) => {
    if(!err) {
        console.log('MySQL 데이터베이스에 정상적으로 접속되었습니다.')
    }
    connection.release()
})

app.get('/',(req, res) => {
    const sql = 'select Host, User from user'
    try {
        mysql.getConnection((err, connection) => {
            if(err) throw err
            connection.query(sql, (err, result, fields) => {
                if(err) {
                    console.log('connection pool에 에러 발생 / '+err)
                    res.status(500).send('message: 서버에러!')
                }
                else
                {
                    if(result.length === 0){
                        res.status(400).send('쿼리의 내용이 없읍니다.')
                        /*
                        res.status(400).send({
                            seccess: true, 
                            result
                        })
                        */
                    }
                    else{
                        res.status(200).send({
                            success : true,
                            result
                        });
                    }
                }
            })
            connection.release()
        })        
    }
    catch(err){
        console.log('connection_pool GET Error / '+err)
        res.status(500).send('message : Internal Server Error')
    }
})

server = app.listen(port, () => console.log('Server Start Listening on port %s',port))

//

var readline = require('readline')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("프로그램 종료!", answer) 
    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
})
