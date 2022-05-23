const express = require('express')
const router = express.Router()
const control = require('./user.ctrl.js')


// 사용예 : >curl localhost:3000/users
router.get('/', control.index)

// 사용예 : >curl localhost:3000/users/1
router.get('/:id', control.show)

// 사용예 : >curl -X DELETE localhost:3000/users
router.delete('/', control.clear)

// 사용예 : >curl -X DELETE localhost:3000/users/1
router.delete('/:id', control.destroy)

// 일반데이터로 POST 하기     >curl -X POST localhost:3000/users -d "name=HongSoek"  
// JSON형식 데이터로 POST하기 >curl -X POST localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Lee_Json\"}"
router.post('', control.create)

module.exports = router