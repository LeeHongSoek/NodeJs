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


/*
// 서버자원 호출 

app.get // 자원을 조회
app.post // 자원을 생성
app.delete  // 자원을 삭제
app.put // 자원을 갱신
app.patch // 자원을 갱신

HTTP 상태코드

• 1xx: 아직 처리중
• 2xx: 자, 여기있어!
• 3xx: 잘 가~ (redirect)
• 4xx: 니가 문제임
• 5xx: 내가 문제임

• 200: 성공(success), GET, PUT
• 201: 작성됨(created), POST
• 204: 내용 없음 (No Conent), DELETE
• 400: 잘못된 요청 (Bad Request)
• 401: 권한 없음 (Unauthorized)
• 404: 찾을 수 없음 (Not found)
• 409: 충돌 (Conflict)
• 500: 서버 에러 (Interel server error)

*/

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