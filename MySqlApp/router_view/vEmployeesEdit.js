const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기

// 사용예 : >curl localhost:3000/
router.get('/', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)

    return res.render('eEmployeesInsert', {employeeNumber})
})

// 사용예 : >curl localhost:3000/
router.get('/:employeeNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    return res.render('eEmployeesUpdate', {employeeNumber})
})

module.exports = router
