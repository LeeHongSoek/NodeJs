const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기

// 사용예 : >curl localhost:3000/
router.get('/:ackType/:employeeNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log(` req.params.ackType = ${req.params.ackType}`)
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    tableInfo.ackType = req.params.ackType
    tableInfo.pk_value = req.params.employeeNumber

    return res.render('hemployee', { tableInfo } /*{ employeeNumber: req.params.employeeNumber }*/)
})

module.exports = router
