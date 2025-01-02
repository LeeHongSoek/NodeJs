const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기

// 사용예 : >curl localhost:3000/
router.get('/:customerNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log(` req.params.customerNumber = ${req.params.customerNumber}`)

    return res.render('hCustomersView', { customerNumber: req.params.customerNumber })
})

module.exports = router
