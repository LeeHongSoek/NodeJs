const express = require('express') // npm install express ---save 
const { swaggerUi, specs } = require('./modules/swagger.js');

app = express()
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.use('/test', require('./routes/index.js')) 
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
const port = process.env.WEB_PORT || 3000
server = app.listen(port, () => console.log(`Server Start Listening on port ${port}`))


var readline = require('readline')
const { route } = require('../RestfulAPITDD/lec_07_app.js')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log('프로그램을 종료합니다!!', answer) 

    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
}) 

