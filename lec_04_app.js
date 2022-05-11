// https://tacademy.skplanet.com/live/player/onlineLectureDetail.action?seq=134
 
const express = require("express");
 
const app = express();
//const port = 3000


// EXPRESS 서버구동
//const server = app.listen(port, () => console.log(`Example app listening on port ${port}`) )

const users = [{name: 'Alice'}]

app.get("/", (req, res) => { res.send('hello world!')}) 
app.get("/users", (req, res) => { res.json(users) })

module.exports = app