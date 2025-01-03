const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)    
    res.status(404).send(`
        <script>
            alert('잘못된 경로입니다.');
            window.location.href = '/employeesList';
        </script>
    `);
})

// 사용예 : >curl localhost:3000/
router.get('/:ackType/:employeeNumber', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 (hemployee)`)
    console.log(` req.params.ackType = ${req.params.ackType}`) // edit, view
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    tableInfo.ackType = req.params.ackType // edit, view
    tableInfo.pk_value = req.params.employeeNumber

    return res.render('hemployee', { tableInfo } /*{ employeeNumber: req.params.employeeNumber }*/)
})

// 사용예 : >curl localhost:3000/
router.get('/insert', (req, res) => {
    
    console.log(` ${req.originalUrl} [${req.method}] 요청 (hemployee) `)
    console.log(` req.params.ackType = insert`)

    tableInfo.ackType = 'insert'

    return res.render('hemployee', { tableInfo } /*{ employeeNumber: req.params.employeeNumber }*/)
})

module.exports = router
