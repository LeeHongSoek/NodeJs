
// readline 사용
var readline = require('readline'); 
var r = readline.createInterface({ input:process.stdin, output:process.stdout }); 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("프로그램 종료!", answer); 
    r.close(); // 반드시 close()를 해줘야 합니다. 
    server.close();
    process.exit();
});

const express = require("express");
const app = express();
const port = 3000

// EXPRESS 서버구동
const server = app.listen(port, () => console.log(`Example app listening on port ${port}`) )

// get 요청 라우팅 예제
app.get("/root", function(req, res){
    console.log("routing /root")
    res.send("<H>Hello world!</H>")
})

// curl localhost:3000/subs -v 404에러 확인
app.get("/error", function(req, res){
    console.log("routing /error")
    throw Error(' 여기서 임의로 에러를 발생시켜 보았습니다..!')
    res.send("<H>Hello error!</H>")
})

const users = {name: 'Alice'}

app.get("/users", function(req, res){
    res.json(users)
})