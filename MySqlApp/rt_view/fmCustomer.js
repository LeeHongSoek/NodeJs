const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../rt_info/iCustomers')

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)    
    res.status(404).send(`
        <script>
            alert('잘못된 경로입니다.');
            window.location.href = '/form/customersList';
        </script>
    `);
    //res.redirect('/form/customersList');  // '/home' 경로로 리디렉션
})

// 사용예 : >curl localhost:3000/
router.get('/:ackType/:customerNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 (hCustomer)`)
    console.log(` req.params.ackType = ${req.params.ackType}`) // edit, view, delete
    console.log(` req.params.customerNumber = ${req.params.customerNumber}`)

    tableInfo.ackType = req.params.ackType // edit, view
    tableInfo.pk_value = req.params.customerNumber

    return res.render('fmCustomer', { tableInfo })
})

// 사용예 : >curl localhost:3000/
router.get('/insert', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 (hCustomer)`)
    console.log(` req.params.ackType = insert`)

    tableInfo.ackType = 'insert'

    return res.render('fmCustomer', { tableInfo })
})

module.exports = router
