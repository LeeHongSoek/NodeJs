const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../rt_info/ifCustomers')

router.get('/', (req, res) => 
{
    const currPage = req.query.currPage || 1; // currPage 값이 없으면 기본값으로 1을 설정

    console.log(`요청 [${req.method}] (ejsCustomersList) : ${req.originalUrl}`)    
    console.log(` req.query.currPage = ${currPage}`);

    tableInfo.currPage = currPage

    return res.render('ejsCustomersList',{ tableInfo })

})

router.get('/:ackType/:customerNumber', (req, res) =>  // edit, view, delete
{    
    const currPage = req.query.currPage || 1; // currPage 값이 없으면 기본값으로 1을 설정

    console.log(`요청 [${req.method}] (ejsCustomer) ${req.originalUrl}`)
    console.log(` req.params.ackType = ${req.params.ackType}`) // edit, view, delete
    console.log(` req.params.customerNumber = ${req.params.customerNumber}`)
    console.log(` req.query.currPage = ${currPage}`);

    tableInfo.ackType = req.params.ackType // edit, view
    tableInfo.pk_value = req.params.customerNumber
    tableInfo.currPage = currPage

    return res.render('ejsCustomer', { tableInfo })
})

router.get('/insert', (req, res) => // insert
{    
    console.log(`요청 [${req.method}] (ejsCustomer) ${req.originalUrl}`)
    console.log(` req.params.ackType = insert`)

    tableInfo.ackType = 'insert'

    return res.render('ejsCustomer', { tableInfo })
})

module.exports = router
