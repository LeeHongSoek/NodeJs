const express = require('express') // npm install express ---save 

app = express()
app.use('/dir_statics', express.static(__dirname + '/dir_statics'))
// app.use(express.static(__dirname + '/html_ejs'))
app.set('view engine','ejs');
app.set('views', __dirname+'/dir_ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save

const path = require('path')
require('dotenv').config({path: path.join(__dirname, './env/server.env')}) // npm i dotenv


app.get('/',(req, res) => {    
    return res.render('fmIndex')
})

app.get('/makeJsFile',(req, res) => {    
    const pool = require('./_MySqlDatabase/connection')
    pool.connectRunQueries()
})

// JSON 요청 본문 파싱 미들웨어
app.use(express.json());

//
// /json/ : json, /pop/ : popup
//

app.use('/json/customers', require('./rt_json/jnCustomers.js')) 
// customer(s)
app.use('/form/customersList', require('./rt_view/fmCustomersList.js')) 
app.use('/form/customer',      require('./rt_view/fmCustomer.js')) 


app.use('/json/employees', require('./rt_json/jnEmployees.js')) 
// employee(s)
app.use('/form/employeesList', require('./rt_view/fmEmployeesList.js')) 
app.use('/form/employee',      require('./rt_view/fmEmployee.js')) 


//
// server = app.listen(3000) 웹서버 기동
//
const port = process.env.WEB_PORT || 3000
server = app.listen(port, () => console.log(`Server Start Listening on port ${port}`))


setTimeout(() => {  }, 500);


var readline = require('readline')
const { route } = require('../RestfulAPITDD/lec_07_app')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log('프로그램을 종료합니다!!', answer) 

    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
}) 

