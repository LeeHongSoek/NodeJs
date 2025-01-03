//////////////////
// 
const express = require('express') // npm install express ---save

app = express()
app.use('/dir_statics', express.static(__dirname + '/dir_statics'))
// app.use(express.static(__dirname + '/html_ejs'))
app.set('view engine','ejs');
app.set('views', __dirname+'/dir_ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save

const path = require('path')
require('dotenv').config({path: path.join(__dirname, './env/server.env')}) // npm i dotenv
const pool = require('./_MySqlDatabase/connection')
pool.chkConnection() // 데이터베이스 성공접속여부를 딱 한번만 체크해본다.

app.get('/',(req, res) => {    
    console.log(` / 요청 : 지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)
    return  res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
})

//
// /view/ : view, /json/ : json, /pop/ : popup
//

// customers
app.use('/json/customers',     require('./router_json/rjCustomers.js')) 
app.use('/view/customersList', require('./router_view/rvCustomersList.js')) 
app.use('/view/customersOne', require('./router_view/rvCustomer.js')) 

// employees
app.use('/json/employees',     require('./router_json/rjEmployees.js')) 
app.use('/view/employeesList', require('./router_view/rvEmployeesList.js')) 
app.use('/view/employeesOne', require('./router_view/rvEmployee.js')) 


//
// server = app.listen(3000) 웹서버 기동
//
const port = process.env.WEB_PORT || 3000
server = app.listen(port, () => console.log(`Server Start Listening on port ${port}`))

//
// mysql 접속이 실패되면 앱을 종료시킨다....
//
setTimeout(() => {
    if (!pool.isConnected) { 
        console.log('지금 MySql 데이터베이스 접속이 실패되어 프로그램을 종료합니다!') 
    
        server.close()
        process.exit()
    }
}, 500);


var readline = require('readline')
const { route } = require('../RestfulAPITDD/lec_07_app')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log('프로그램을 종료합니다!!', answer) 

    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
}) 