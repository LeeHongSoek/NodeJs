const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    return res.render('hEmployeesList',{title:"사원 리스트"});
})

module.exports = router
