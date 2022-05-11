// https://tacademy.skplanet.com/live/player/onlineLectureDetail.action?seq=134
 
const express = require("express");
const app = express();

// EXPRESS 서버구동
//const server = app.listen(3000, () => console.log(`Example app listening on port ${port}`) )

const users = [{name: 'Alice'}] // 사용자 정보가 배열 형태로 구성

app.get("/", (req, res) => { res.send('hello world!')}) 
app.get("/users", (req, res) => { res.json(users) })

module.exports = app