const express = require('express') // npm install express ---save
const path = require('path')
require('dotenv').config({path: path.join(__dirname, './env/server.env')}) // npm i dotenv
const pool = require('./database/connection')

app = express()
app.set('views', __dirname+'/ejs');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save

const employees = require('./router/employees.js') // '/index.js'는 생략 가능


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

app.get('/',(req, res) => {    
    console.log(` / 요청 : 지금 MySql 데이터베이스 접속이 ${mysal_coonected} 입니다.`)
    
    return res.status(200).send(`지금 MySql 데이터베이스 접속이 ${mysal_coonected} 입니다.`)
})

// :gubun 을 파라미터로 넘기기 위해   express.Router()  => express.Router({mergeParams: true})  같이 {mergeParams: true}를 추가하자..!!
app.use('/:gubun/employees', employees) 

//
// server = app.listen(3000)
//
const port = process.env.WEB_PORT || 3000
server = app.listen(port, () => console.log(`Server Start Listening on port ${port}`))
//


//
var readline = require('readline')
const { route } = require('../RestfulAPITDD/lec_07_app')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("프로그램 종료!", answer) 
    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
}) 