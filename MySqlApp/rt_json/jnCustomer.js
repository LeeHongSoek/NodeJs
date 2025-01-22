const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../_MySqlDatabase/connection')
const customersInfo = require('../rt_info/ifCustomers')
const pageInfo = require('../rt_info/ifPage')

router.use('/:customerNumber', (req, res) => 
{    
    console.log(`요청 [${req.method}] [/:customerNumber] ${req.originalUrl}`)
    console.log(` req.params.customerNumber = ${req.params.customerNumber}`)
    
    if (req.method === 'GET') // 해당건 1 건 읽기 ..
    {            
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
    } // if (req.method === 'GET') // 해당건 1 건 읽기 ..

    if (req.method === 'DELETE')  // 해당건 1 건 삭제 ..
    {
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
    } // if (req.method === 'DELETE')  // 해당건 1 건 삭제 ..
})

/*
2. **두 메서드가 함께 사용될 때의 동작**:
   - `router.use()`로 정의된 미들웨어는 해당 경로로 들어오는 모든 요청에 대해 실행됩니다. 그 후, `router.get()`으로 정의된 GET 요청에 대한 핸들러가 실행됩니다. 
   즉, GET 요청이 들어오면 먼저 `router.use()`의 미들웨어가 실행되고, 그 다음에 `router.get()`의 핸들러가 실행됩니다.

3. **예시 코드**:   
   const express = require('express');
   const router = express.Router();

   // 모든 요청에 대해 실행되는 미들웨어
   router.use('/', (req, res, next) => {
       console.log('모든 요청에 대해 실행되는 미들웨어');
       next(); // 다음 미들웨어 또는 라우터로 넘어감
   });

   // GET 요청에 대한 핸들러
   router.get('/', (req, res) => {
       res.send('GET 요청에 대한 응답');
   });

   module.exports = router;
   

4. **Express.js의 라우팅 개념**:
   Express.js에서 라우팅은 클라이언트의 요청 URL과 HTTP 메서드에 따라 적절한 핸들러 함수를 호출하는 과정을 의미합니다. 
   라우터는 특정 경로에 대한 요청을 처리하는 방법을 정의하며, 이를 통해 API 엔드포인트를 구성할 수 있습니다. 
   라우팅은 웹 애플리케이션의 구조를 명확히 하고, 요청을 효율적으로 처리하는 데 중요한 역할을 합니다.

이와 같이 `router.use()`와 `router.get()`을 함께 사용하면, 
특정 경로에 대한 모든 요청을 처리하는 미들웨어와 특정 HTTP 메서드에 대한 요청을 처리하는 핸들러를 
조합하여 유연한 라우팅을 구현할 수 있습니다.
*/

/**
 *  @swagger
 *  /json/customer:
 *    get:
 *      tags:
 *      - product
 *      description: ㅁㅁㅁ
 *      responses:
 *        200:
 *          description: 성공적으로 제품을 조회했습니다.
 */ 
router.use('/', (req, res) => 
{
    //var a = req.query.customerName;
    //var b = req.query.contactLastName; 
    //console.log("a : " + a + " / b : " + b)    

    console.log(`요청 [${req.method}] [/] ${req.originalUrl}`)
    console.log(`req.query : `);
    console.dir(req.query, { depth: null, colors: true });

    if (req.method === 'GET') // 페이지 단위로 리스트 읽기 ...
    {            
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
    } // if (req.method === 'GET') // 페이지 단위로 리스트 읽기 ...

    if (req.method === 'PUT') // 기존건 1 건 갱신 ...
    {
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
    } // if (req.method === 'PUT') // 기존건 1 건 갱신 ...
 
    if (req.method === 'POST') // 새로운 1 건 등록 ..
    {
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
    } // if (req.method === 'POST') // 새로운 1 건 등록 ..
 
})


module.exports = router
