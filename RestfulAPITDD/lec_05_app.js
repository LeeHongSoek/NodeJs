const express = require("express")
const app = express()

// 사용자 정보가 배열 형태로 구성
const users = [{id:1, name: 'Alice'},
               {id:2, name: 'Bek'},
               {id:3, name: 'Chris'}
              ] 

app.get('/', (req, res) => { res.send('hello world!')}) 

app.get('/users', (req, res) => { 
    req.query.limit = req.query.limit || 10 //  10, "10", "ten" 
    const limit = parseInt(req.query.limit, 10 )
    
    if(Number.isNaN(limit)) // 정수가 아닌경우
    {
        res.status(400).end() // 400에러를 리턴
    }
    else 
    {
        res.json(users.slice(0,limit))  // user를 리턴
    }    
})

module.exports = app
