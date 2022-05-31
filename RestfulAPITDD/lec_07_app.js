const express = require('express')
const logger = require('morgan') // npm install morgan --save
const bodyParser = require('body-parser')
const app = express();
const user = require('./api/user/index.js') // '/index.js'는 생략 가능

app.use(logger('dev'))            
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/users',user)

// 사용예 : >curl localhost:3000/
app.get('/', (req, res) => { res.send('hello Root!')}) 


module.exports = app
