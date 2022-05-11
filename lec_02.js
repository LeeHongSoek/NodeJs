// https://tacademy.skplanet.com/live/player/onlineLectureDetail.action?seq=134

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
const logger = require("morgan")
const app = express();
const port = 3000

// 미들웨어 예제
const mw1 = (req, res, next) => {
    console.log("mw1");
    next();
}

const mw2 = (req, res, next) => {
    console.log("mw2");
    next();
}

const mw = (req, res, next) => {
    throw Error('미들웨어 에러!')
}
const errorMw = (err, req, res, next) => {
    console.log('여기서 에러를 캣치 합니다 ',err.message) 
    next()      
}


// EXPRESS 서버구동
const server = app.listen(port, () => console.log(`Example app listening on port ${port}`) )
app.use(mw1)
app.use(mw2)
app.use(logger('dev'))

app.use(mw)
app.use(errorMw)


// get 요청 라우팅 예제
app.get("/root", function(req, res){
    console.log("routing /root")
    res.send("<H>Hello world!</H>")
})

