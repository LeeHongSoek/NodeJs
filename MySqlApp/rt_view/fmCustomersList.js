const express = require('express')
const router = express.Router() // {mergeParams: true} https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../rt_info/ifCustomers')

router.get('/', (req, res) => {
    console.log(`요청 [${req.method}] (hCustomersList) : ${req.originalUrl}`)    
    return res.render('fmCustomersList',{ tableInfo })
})

module.exports = router
