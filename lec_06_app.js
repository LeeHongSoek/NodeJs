const express = require('express');
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express();

// 사용자 정보가 배열 형태로 구성 (웹으로 호출될때마다 초기화가 된다.)
let users = [{id:1, name: 'Alice'},
             {id:2, name: 'Bek'},
             {id:3, name: 'Chris'}
            ] 

app.use(logger('dev'))            
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// 사용예 : >curl localhost:3000/
app.get('/', (req, res) => { res.send('hello world!')}) 

// 사용예 : >curl localhost:3000/users
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

// 사용예 : >curl localhost:3000/users/1
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

// 사용예 : >curl -X DELETE localhost:3000/users
app.delete('/users', (req, res) => {
    if(users.length >0) {
        //users = users.slice(0,0)
        users = []
        console.log(users)
        return res.status(204).end()
    }
    else {
        console.log(users)
        return res.status(404).end()
    }
})

// 사용예 : >curl -X DELETE localhost:3000/users/1
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

// 일반데이터로 POST 하기     >curl -X POST localhost:3000/users -d "name=HongSoek"  
// JSON형식 데이터로 POST하기 >curl -X POST localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Lee_Json\"}"
app.post('/users', (req, res) => {    
    console.log(req.body)
    const name = req.body.name
    if (!name)  // 이름이 없다면 400을 리턴한다
    {
        return res.status(400).end()        
    }    

    const found = users.filter(user => user.name === name).length // 중복된이름이 있다면 1
    if (found){
        return res.status(409).end()
    }

    const id = Date.now()
    const user = {id, name}

    users.push(user)
    res.status(201).json(user)
})
module.exports = app
