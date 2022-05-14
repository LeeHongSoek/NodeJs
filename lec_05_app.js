const express = require("express");
const app = express();


// 사용자 정보가 배열 형태로 구성
const users = [{id:1, name: 'Alice'},
               {id:2, name: 'Bek'},
               {id:3, name: 'Chris'}
              ] 

app.get("/", (req, res) => { res.send('hello world!')}) 
app.get("/users", (req, res) => { 
    req.query.limit = req.query.limit || 10 //  10, "10", "ten" 
    const limit = parseInt(req.query.limit, 10 )
    
    if(Number.isNaN(limit))
    {
        res.status(400).end()
    }
    else 
    {
        res.json(users.slice(0,limit)) 
    }    
})

module.exports = app
