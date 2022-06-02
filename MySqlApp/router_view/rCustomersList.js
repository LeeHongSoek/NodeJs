const express = require('express')
const router = express.Router() // {mergeParams: true} https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../router_info/customers')

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)    
    return res.render('eCustomersList',{ tableInfo })
})

module.exports = router
