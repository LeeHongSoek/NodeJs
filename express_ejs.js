
//

var readline = require('readline'); 
var r = readline.createInterface({ input:process.stdin, output:process.stdout }); 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("프로그램 종료!", answer); 
    r.close() // 반드시 close()를 해줘야 합니다. 
    server.close();
    process.exit();
});

//

const express = require("express"); // npm install express ---save
const app = express();


const server = app.listen(3000, () => {
    console.log("start server : localhost:3000");
})

app.get('/', function(req, res){
    //console.log(req);
    res.send('실행 express_ejs.js');
})

app.get('/about', function(req, res){
    //console.log(req);
    res.send('about page');
})

app.get('/club/:clubSn', function (req, res) { 
	var clubSn = req.params.clubSn;
    res.send(`clubSn is (${clubSn})`);
});

//

app.set('views', __dirname+'/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile); // npm install ejs ---save

app.get('/home', function(req, res){
    res.render('index.html');
})

