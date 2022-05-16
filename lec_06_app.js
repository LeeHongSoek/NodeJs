const express = require("express");
const app = express();

// 사용자 정보가 배열 형태로 구성 (웹으로 호출될때마다 초기화가 된다.)
let users = [{id:1, name: 'Alice'},
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

app.get('/users/:id', (req, res) => {
    // id 값을 얻어낸다
    const id = parseInt( req.params.id ,10)

    if(Number.isNaN(id)) {
        res.status(400).end() // id가 숫자가 아닐경우 400으로 응답한다.
        return      
    }
    // id에 해당하는 user 조회
    const user = users.filter(user => user.id === id )[0]

    if(!user) { // if(user === undefined)
        return res.status(404).end() // id에 해당하는 user 가 없을때 404를 응답한다.
    }

    // 응답: res
    res.json(user)
})


app.delete('/users', (req, res) => {
    if(users.length >0) {
        users = users.slice(0,0)
        console.log(users)
        return res.status(204).end()
    }
    else {
        console.log(users)
        return res.status(404).end()
    }
})

app.delete('/users/:id', (req, res) => {
    // id 값을 얻어낸다
    const id = parseInt( req.params.id ,10)

    if(Number.isNaN(id)) {
        res.status(400).end() // id가 숫자가 아닐경우 400으로 응답한다.
        return      
    }
    // id에 해당하는 user 조회
    const user = users.filter(user => user.id === id )[0]

    if(!user) { // if(user === undefined)
        return res.status(404).end()  // id에 해당하는 user 가 없을때 404를 응답한다.
    }

    // id를 제외한 users 배열조회
    users = users.filter(user => user.id !== id )
    console.log(users)

    return res.status(204).end()
})

module.exports = app
