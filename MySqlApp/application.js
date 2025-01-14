//////////////////
// 
const express = require('express') // npm install express ---save 

app = express()
app.use('/dir_statics', express.static(__dirname + '/dir_statics'))
// app.use(express.static(__dirname + '/html_ejs'))
app.set('view engine','ejs');
app.set('views', __dirname+'/dir_ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save

const fs = require('fs');
const path = require('path')
require('dotenv').config({path: path.join(__dirname, './env/server.env')}) // npm i dotenv
const pool = require('./_MySqlDatabase/connection')
pool.chkConnection() // 데이터베이스 성공접속여부를 딱 한번만 체크해본다.

app.get('/',(req, res) => {    
    if (pool.isConnected)
    {
        console.log(` / 요청 : 지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)

        // 기본파일을 자동으로 만들기 TABLE SPACK -> ~.JS 
        makeInfoFile(res);

        return  res.status(200).send(`지금 MySql 데이터베이스 접속이 ${pool.isConnected} 입니다.`)    
    }
    else
    {
        return  res.status(400).end() // 400에러를 리턴
    }
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


function makeInfoFile(res) 
{
    
        pool.connect.query('show tables ', (err, result, fields) => {
            if (err) {
                console.log(`sql에 에러 발생 : ${err}`);

                res.status(500).send({
                    seccess: false,
                    message: 'sql에 에러 발생',
                    sql: 'show tables ',
                    err
                });
            }

            else {
                console.info(`실행 : 'show tables '`);
                console.info(`Row수 : ${result.length}`);
                
                
                result.forEach(row => {
                    console.info(row.Tables_in_classicmodels);

                    if (row.Tables_in_classicmodels == 'offices') {

                        const rtInfoDir = path.join(__dirname, 'rt_info');
                        const fileName = `if${row.Tables_in_classicmodels.charAt(0).toUpperCase() + row.Tables_in_classicmodels.slice(1)}.js`;
                        const filePath = path.join(rtInfoDir, fileName);

                        pool.connect.query('show columns from '+row.Tables_in_classicmodels, (err, result, fields) => {
                            if (err) {
                                console.log(`sql에 에러 발생 : ${err}`);
                
                                res.status(500).send({
                                    seccess: false,
                                    message: 'sql에 에러 발생',
                                    sql: 'show tables ',
                                    err
                                });
                            }
                
                            else {

                                try {
                                    if (!fs.existsSync(rtInfoDir)) {
                                        fs.mkdirSync(rtInfoDir);
                                    }
        
                                    fs.writeFileSync(filePath, 'const getTotalRowSql = require(\'./getTotalRowSql\')   \n');
                                    fs.appendFileSync(filePath, '                                                      \n');
                                    fs.appendFileSync(filePath, ' const tableInfo = {                                  \n');
                                    fs.appendFileSync(filePath, '                                                      \n');
                                    fs.appendFileSync(filePath, '     tableName : \'' + row.Tables_in_classicmodels + '\', \n');
                                    fs.appendFileSync(filePath, '     tableNameKor : \'\',                             \n');

                                    const Field = result.map(row => row.Field);
                                    const Type = result.map(row => row.Type);
                                    const Null = result.map(row => row.Null);
                                    const Key = result.map(row => row.Key);
                                    const Default = result.map(row => row.Default);
                                    const Extra = result.map(row => row.Extra);
    
                                    fs.appendFileSync(filePath, '                                                      \n');
                                    fs.appendFileSync(filePath, '  fields :  {                                         \n');
                                    
                                    Field.forEach((field,idx) => {                                
                                        if (field != 'del') {
                                            fs.appendFileSync(filePath, ` ${field} : { pk:${(Key[idx]=='PRI')?'true':'false'},     nameKor: '', isListView: true, maxLength:  } `);
                                            fs.appendFileSync(filePath, ' ,\n');
                                        }                                            
                                    });
                                    fs.appendFileSync(filePath, '            },                                        \n');    
                                    fs.appendFileSync(filePath, '                                                      \n');
                                    fs.appendFileSync(filePath, ' }                                                    \n');
                                    fs.appendFileSync(filePath, '                                                      \n');
                                    fs.appendFileSync(filePath, ' module.exports = tableInfo                           \n');
        
        
        
                                    console.log(`File ${fileName} created successfully`);
                                } catch (error) {
                                    console.error('Error creating file:', error);
                                }


                               
                            }
                        })

                        

                        
                    }
                });

                console.info(`sql 정상실행!`);
            }
        });
    
}




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

