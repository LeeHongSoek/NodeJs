const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../_MySqlDatabase/connection')
const customersInfo = require('../rt_info/ifCustomers')
const pageInfo = require('../rt_info/ifPage')


router.use('/', (req, res, next) => {

    console.log(`요청 [${req.method}] [/] ${req.originalUrl}`)
    console.log(`req.query : `);
    console.dir(req.query, { depth: null, colors: true });

    next(); // 다음 미들웨어 또는 라우터로 넘어감
});

/**
 *  @swagger
 *  /json/customer:
 *    get:
 *      tags:
 *      - product
 *      description: 페이지 단위로 리스트 읽기 ...
 *      parameters:
 *        - in: query
 *          name: customerName
 *          schema:
 *            type: string
 *          required: false
 *          description: 고객명
 *        - in: query
 *          name: contactLastName
 *          schema:
 *            type: string
 *          required: false
 *          description: 담당자성
 *      responses:
 *        200:
 *          description: (n) 개의 레코드를 리턴합니다.
 */ 
router.get('/', (req, res) => {

    var currPage = req.query.currPage || 1; // currPage 값이 없으면 기본값으로 1을 설정 // 초기 페이지 (첫페이지 & 변동가능)
    var sqlLastSelectKeys = customersInfo.selectSqlKeys // select 문!!
    var sqlLastSelectList = customersInfo.selectSqlList // select 문!!

    let connect // mariaDB 커넥션..

    pool.connectStart()
        .then((connection)=>{                             
            connect = connection

            var keysQuery = Object.keys(req.query); // 검색 키 값들을 화면에서 가져옵니다.
            for (var keyQuery in keysQuery) {
                
                var fieldName = keysQuery[keyQuery]
                console.log("req.json 키=값 : " + fieldName + "=" + req.query[fieldName])
    
                if (fieldName==='currPage') {
                    currPage = eval(req.query[fieldName])              
                    pageInfo.currPage = currPage // 초기 페이지 (첫페이지 & 변동가능)  
                }
    
                var keysSearchs = Object.keys(customersInfo.searchs); // 등록된 검색 키를 대조해서 쿼리를 구성한다.
                for (var keysSearchs in keysSearchs) {
                    if ((keyQuery === keysSearchs) && (req.query[fieldName] !='')) {
                        sqlLastSelectKeys = sqlLastSelectKeys + `\n   AND  ${fieldName} like '${req.query[fieldName]}%' `
                        sqlLastSelectList = sqlLastSelectList + `\n   AND  ${fieldName} like '${req.query[fieldName]}%' `
                    }
                }
            }
            var totalRowSql = customersInfo.getTotalRowSql(sqlLastSelectKeys)  // 총 건수를 구하기 위한 쿼리를 구성한다

            console.info(`실행 : ${totalRowSql}`)
            return connect.execute(totalRowSql)                            
        })
        .then(([counters]) => {                                
            pageInfo.totalRow = counters[0].total_row // 총 레코드 수

            sqlLastSelectList += ` limit ${pageInfo.limitFrom}, ${pageInfo.limitTo} ` // 페이지에 해당하는 limit가 구성되었다...

            console.info(`실행 : ${sqlLastSelectList}`)
            return connect.execute(sqlLastSelectList)
        })
        .then(([data]) => {
            //data.map((data) => {console.info(`data.customerNumber : ${data.customerNumber}`)})
            connect.end()

            res.status(200).send({
                success : true,
                message : `${data.length}개의 레코드를 리턴합니다.`,
                length  : data.length,
                result  : data,
                pageInfo
            });    
        })
        .catch((error) => {
            console.error('sql에 에러 발생 : ', error);

            res.status(500).send({
                success : false, 
                message : 'sql에 에러 발생',
                sql     : `${sqlLastSelectList}`,
                error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})

/**
 *  @swagger
 *  /json/customer:
 *    put:
 *      tags:
 *      - product
 *      description: 기존건 1 건 갱신 ...
 *      responses:
 *        200:
 *          description: (n) 개의 레코드가 반영되었습니다.
 */ 
router.put('/', (req, res) => {

    console.log(`req.body : `);
    console.dir(req.body, { depth: null, colors: true });
    const formData = req.body; // app.use(express.json()); // 해 줘야 함

    let connect // mariaDB 커넥션..

    pool.connectStart()
        .then((connection)=>{                             
            connect = connection

            console.info(`실행 : ${connect.format(customersInfo.updateSqlOne, [ formData.customerName
                                                                                , formData.contactLastName
                                                                                , formData.contactFirstName
                                                                                , formData.phone
                                                                                , formData.addressLine1
                                                                                , formData.addressLine2
                                                                                , formData.city
                                                                                , formData.state
                                                                                , formData.postalCode
                                                                                , formData.country
                                                                                , formData.salesRepEmployeeNumber
                                                                                , formData.creditLimit
                                                                                , formData.customerNumber
                                                                                ])}`)
            return connect.execute(customersInfo.updateSqlOne, [ formData.customerName
                                                                , formData.contactLastName
                                                                , formData.contactFirstName
                                                                , formData.phone
                                                                , formData.addressLine1
                                                                , formData.addressLine2
                                                                , formData.city
                                                                , formData.state
                                                                , formData.postalCode
                                                                , formData.country
                                                                , formData.salesRepEmployeeNumber
                                                                , formData.creditLimit
                                                                , formData.customerNumber
                                                                ]) 
        })
        .then(([result]) => {
            connect.end()

            console.info(`반영된 Row수 : ${result.affectedRows}`)

            res.status(200).send({
                success : true,
                message : `${result.affectedRows}개의 레코드가 반영되었습니다.`,
                length  : result.affectedRows,
                formData
            });    
        })
        .catch((error) => {
            console.error('sql에 에러 발생 : ', error);

            res.status(500).send({
                success : false, 
                message : 'sql에 에러 발생',
                sql     : `${connect.format(customersInfo.updateSqlOne, [ formData.customerName
                                                                        , formData.contactLastName
                                                                        , formData.contactFirstName
                                                                        , formData.phone
                                                                        , formData.addressLine1
                                                                        , formData.addressLine2
                                                                        , formData.city
                                                                        , formData.state
                                                                        , formData.postalCode
                                                                        , formData.country
                                                                        , formData.salesRepEmployeeNumber
                                                                        , formData.creditLimit
                                                                        , formData.customerNumber
                                                                        ])}` ,
                                                                        error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})
 
/**
 *  @swagger
 *  /json/customer:
 *    post:
 *      tags:
 *      - product
 *      description: 새로운 1 건 등록 ..
 *      responses:
 *        200:
 *          description: (n) 개의 레코드가 반영되었습니다.
 */ 
router.post('/', (req, res) => {

    // req.body에서 폼 데이터를 받음
    console.log(`req.body : `);
    console.dir(req.body, { depth: null, colors: true });

    const formData = req.body; // app.use(express.json()); // 해 줘야 함

    let connect // mariaDB 커넥션..

    pool.connectStart()
        .then((connection)=>{                             
            connect = connection

            console.info(`실행 : ${connect.format(customersInfo.insertSqlOne, [ formData.customerName
                                                                                , formData.contactLastName
                                                                                , formData.contactFirstName
                                                                                , formData.phone
                                                                                , formData.addressLine1
                                                                                , formData.addressLine2
                                                                                , formData.city
                                                                                , formData.state
                                                                                , formData.postalCode
                                                                                , formData.country
                                                                                , formData.salesRepEmployeeNumber
                                                                                , formData.creditLimit
                                                                                ])}`)
            return connect.execute(customersInfo.insertSqlOne, [ formData.customerName
                                                                , formData.contactLastName
                                                                , formData.contactFirstName
                                                                , formData.phone
                                                                , formData.addressLine1
                                                                , formData.addressLine2
                                                                , formData.city
                                                                , formData.state
                                                                , formData.postalCode
                                                                , formData.country
                                                                , formData.salesRepEmployeeNumber
                                                                , formData.creditLimit
                                                                ]) 
        })
        .then(([result]) => {
            connect.end()

            console.info(`반영된 Row수 : ${result.affectedRows}`)

            res.status(200).send({
                success : true,
                message : `${result.affectedRows}개의 레코드가 반영되었습니다.`,
                length  : result.affectedRows,
                formData
            });    
        })
        .catch((error) => {
            console.error('sql에 에러 발생 : ', error);

            res.status(500).send({
                success : false, 
                message : 'sql에 에러 발생',
                sql     :  `${connect.format(customersInfo.insertSqlOne, [ formData.customerName
                                                                            , formData.contactLastName
                                                                            , formData.contactFirstName
                                                                            , formData.phone
                                                                            , formData.addressLine1
                                                                            , formData.addressLine2
                                                                            , formData.city
                                                                            , formData.state
                                                                            , formData.postalCode
                                                                            , formData.country
                                                                            , formData.salesRepEmployeeNumber
                                                                            , formData.creditLimit
                                                                            ])}`,
                error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})


router.use('/:customerNumber', (req, res, next) => {

    console.log(`요청 [${req.method}] [/:customerNumber] ${req.originalUrl}`)
    console.log(` req.params.customerNumber = ${req.params.customerNumber}`)

    next(); // 다음 미들웨어 또는 라우터로 넘어감
})
 
/**
 *  @swagger
 *  /json/customer/{customerNumber}:
 *    get:
 *      tags:
 *      - product
 *      description: 해당 고객의 정보를 읽기
 *      parameters:
 *        - in: path
 *          name: customerNumber
 *          schema:
 *            type: integer
 *          required: true
 *          description: 고객 번호
 *      responses:
 *        200:
 *          description: (n) 개의 레코드를 리턴합니다.
 */ 
router.get('/:customerNumber', (req, res, next) => {

    let connect // mariaDB 커넥션..

    pool.connectStart()
        .then((connection)=>{                             
            connect = connection

            console.info(`실행 : ${connect.format(customersInfo.selectSqlOne, [req.params.customerNumber])}`)
            return connect.execute(customersInfo.selectSqlOne, [req.params.customerNumber])
        })
        .then(([result]) => {
            connect.end()

            console.info(`Row수 : ${result.length}`)

            res.status(200).send({
                success : true,
                message : `${result.length}개의 레코드를 리턴합니다.`,
                length  : result.length,
                result
            });
        })
        .catch((error) => {
            console.error('sql에 에러 발생 : ', error);

            res.status(500).send({
                success : false, 
                message : 'sql에 에러 발생',
                sql     : `${connect.format(customersInfo.selectSqlOne, [req.params.customerNumber])}`, 
                error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})

/**
 *  @swagger
 *  /json/customer/{customerNumber}:
 *    delete:
 *      tags:
 *      - product
 *      description: 해당 고객의 정보를 삭제
 *      parameters:
 *        - in: path
 *          name: customerNumber
 *          schema:
 *            type: integer
 *          required: true
 *          description: 고객 번호
 *      responses:
 *        200:
 *          description: (n) 개의 레코드가 삭제되었습니다.
 */ 
router.delete('/:customerNumber', (req, res, next) => {

    let connect // mariaDB 커넥션..
    pool.connectStart()
        .then((connection)=>{                             
            connect = connection

            console.info(`실행 : ${connect.format(customersInfo.deleteSqlOne, [req.params.customerNumber])}`)
            return connect.execute(customersInfo.deleteSqlOne, [req.params.customerNumber])
        })
        .then(([result]) => {
            connect.end()

            console.info(`반영된 Row수 : ${result.affectedRows}`)
            
            if (result.affectedRows === 0) {
                res.status(404).send({ success: false, message: '삭제할 레코드를 찾을 수 없습니다.' });
            } else {
                res.status(200).send({
                    success: true,
                    message: `${result.affectedRows}개의 레코드가 삭제되었습니다.`,
                });
            }
        })
        .catch((error) => {
            console.error('sql에 에러 발생 : ', error);

            res.status(500).send({
                success : false, 
                message : 'sql에 에러 발생',
                sql     : `${connect.format(customersInfo.deleteSqlOne, [req.params.customerNumber])}`,
                error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})


module.exports = router
