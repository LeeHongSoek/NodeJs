const express = require('express') // npm install express ---save
app = express()
app.set('views', __dirname+'/ejs_views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save

const path = require('path')
require('dotenv').config({path: path.join(__dirname, './env/server.env')}) // npm i dotenv
const pool = require('./database/connection')
pool.chkConnection() // 데이터베이스 성공접속여부를 딱 한번만 체크해본다.

app.get('/',(req, res) => {    
    console.log(` / 요청 : 지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)        
    return  res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
})

//
// v : view, j : json, p : popup
//

// customers

app.use('/json/customers', require('./router_json/customers.js')) 

app.use('/view/customersList', require('./router_view/customers/List.js')) 
app.use('/view/customersView', require('./router_view/customers/View.js')) 
app.use('/view/customersEdit', require('./router_view/customers/Edit.js')) 

// employees

app.use('/json/employees', require('./router_json/employees.js')) 

app.use('/view/employeesList', require('./router_view/employees/List.js')) 
app.use('/view/employeesView', require('./router_view/employees/View.js')) 
app.use('/view/employeesEdit', require('./router_view/employees/Edit.js')) 

//
// server = app.listen(3000)
//
const port = process.env.WEB_PORT || 3000
server = app.listen(port, () => console.log(`Server Start Listening on port ${port}`))

var readline = require('readline')
const { route } = require('../RestfulAPITDD/lec_07_app')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("프로그램 종료!", answer) 
    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
}) 