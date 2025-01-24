const express = require('express') // npm install express ---save 
const { swaggerUi, specs } = require('./modules/swagger.js'); // npm install swagger-jsdoc swagger-ui-express redoc-express
const redoc = require('redoc-express');

app = express()

app.use((req, res, next) => { // 로깅 미들웨어
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use(express.json()); // JSON 요청 본문 파싱 미들웨어

app.set('view engine','ejs');
app.set('views', __dirname+'/dir_ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save
app.use('/dir_statics', express.static(__dirname + '/dir_statics'))

app.get('/',(req, res) => {  return res.render('ejsIndex') }) // ejsIndex 화면 
app.get('/Hello', (req, res) => { res.json({ message: 'Hello World!' }) }) // json 테스트
app.use('/test', require('./test')) 
app.get('/makeJsFile',(req, res) => {  require('./_MySqlDatabase/connection').connectRunQueries() }) // 테이블에서 정보파일 생성

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // swagger
app.get('/swagger.json', (req, res) => { // OpenAPI 사양 JSON 제공
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
});
app.use('/redoc', redoc({ // Redoc 설정
    title: 'API Documentation',
    specUrl: '/swagger.json',
    redocOptions: {
        theme: {
            colors: {
                primary: {
                    main: '#6EC5AB'
                }
            }
        }
    }
}));

  

//
// /json/ : json, /pop/ : popup, /form/ : form
//

// customer(s)
app.use('/json/customer', require('./rt_json/jnCustomer.js')) 
app.use('/form/customer', require('./rt_view/fmCustomer.js')) 

// employee(s)
app.use('/json/employee', require('./rt_json/jnEmployee.js')) 
app.use('/form/employee', require('./rt_view/fmEmployee.js')) 

//
// server = app.listen(3000) 웹서버 기동
//
const port = 3000
server = app.listen(port, () => { 
    
    console.log('');
    console.log(`서버가 (${port})번 포트로 대기중... [종료를 하려면 아무 키를 누르세요.]`);
    console.log('');
    console.log('');

    process.stdin.setRawMode(true);
    process.stdin.resume();    
    process.stdin.on('data', (key) => {

        //console.log('입력된 키:', key.toString());
        console.log('');
        console.log('------------------------ Good by~~!  [프로그램을 종료합니다!!]');
        console.log('');
        console.log('');

        if (typeof server !== 'undefined' && server.close) {
            server.close();
        }
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.exit();
    });  
})
