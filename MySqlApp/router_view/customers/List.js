const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../../router_data/customers')

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    return res.render('customers/List',{ tableInfo })
})

module.exports = router
