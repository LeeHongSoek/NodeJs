const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const tableInfo = require('../router_info/iCustomers')

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)    
    res.status(404).send(`
        <script>
            alert('잘못된 경로입니다.');
            window.location.href = '/view/customersList';
        </script>
    `);
    //res.redirect('/view/customersList');  // '/home' 경로로 리디렉션
})

// 사용예 : >curl localhost:3000/
router.get('/:ackType/:customerNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    console.log(` req.params.ackType = ${req.params.ackType}`)
    console.log(` req.params.customerNumber = ${req.params.customerNumber}`)

    tableInfo.ackType = req.params.ackType
    tableInfo.pk_value = req.params.customerNumber

    return res.render('hCustomer', { tableInfo } /*{ customerNumber: req.params.customerNumber }*/)
})

module.exports = router
