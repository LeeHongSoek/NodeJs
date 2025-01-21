const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../rt_info/ifEmployees')

router.get('/', (req, res) => {
    const currPage = req.query.currPage || 1; // currPage 값이 없으면 기본값으로 1을 설정

    console.log(`요청 [${req.method}] (ejsEmployeesList) : ${req.originalUrl}`)    
    console.log(` req.query.currPage = ${currPage}`);

    tableInfo.currPage = currPage

    return res.render('ejsEmployeesList',{ tableInfo })
})

// 사용예 : >curl localhost:3000/
router.get('/:ackType/:employeeNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 (hemployee)`)
    console.log(` req.params.ackType = ${req.params.ackType}`) // edit, view
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    tableInfo.ackType = req.params.ackType // edit, view
    tableInfo.pk_value = req.params.employeeNumber

    return res.render('ejsEmployee', { tableInfo } /*{ employeeNumber: req.params.employeeNumber }*/)
})

// 사용예 : >curl localhost:3000/
router.get('/insert', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 (hemployee) `)
    console.log(` req.params.ackType = insert`)

    tableInfo.ackType = 'insert'

    return res.render('ejsEmployee', { tableInfo } /*{ employeeNumber: req.params.employeeNumber }*/)
})

module.exports = router
