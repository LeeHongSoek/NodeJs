const express = require('express') // npm install express ---save 
const { swaggerUi, specs } = require('./modules/swagger.js');

app = express()




app.set('view engine','ejs');
app.set('views', __dirname+'/dir_ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save

app.get('/',(req, res) => {  return res.render('ejsIndex') })
app.get('/Hello', (req, res) => { res.json({ message: 'Hello World!' }) })
app.use('/test', require('./test/index.js')) 


app.use('/json/customer', require('./rt_json/jnCustomer.js')) 
app.use('/form/customer', require('./rt_view/fmCustomer.js')) 


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// OpenAPI 사양 JSON 제공
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
});




//
// server = app.listen(3000) 웹서버 기동
//
const port = 3000
server = app.listen(port, () => { 
    
    console.log('');
    console.log('');
    console.log(`서버가 (${port})번 포트로 대기중... [종료를 하려면 아무 키를 누르세요.]`);
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
