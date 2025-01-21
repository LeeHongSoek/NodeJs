const express = require('express')
const router = express.Router() // {mergeParams: true} https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../rt_info/ifCustomers')

router.get('/', (req, res) => {
    const currPage = req.query.currPage || 1; // currPage 값이 없으면 기본값으로 1을 설정

    console.log(`요청 [${req.method}] (ejsCustomersList) : ${req.originalUrl}`)    
    console.log(` req.query.currPage = ${currPage}`);

    tableInfo.currPage = currPage

    return res.render('ejsCustomersList',{ tableInfo })
})

module.exports = router
