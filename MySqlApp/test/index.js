const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기


/**
 *  @swagger
 *  /test:
 *    get:
 *      tags:
 *      - product
 *      description: 이건 테스트 입니다.
 *      responses:
 *        200:
 *          description: 성공적으로 테스트를 조회했습니다.
 */ 
router.get('/', (req, res) => {
    console.log(`요청 [${req.method}] [/] ${req.originalUrl}`)
    res.json({ message: `메롱!! ${req.originalUrl}` });
})

module.exports = router
