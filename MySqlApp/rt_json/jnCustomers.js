const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../_MySqlDatabase/connection')
const customersInfo = require('../rt_info/ifCustomers')
const pageInfo = require('../rt_info/ifPage')


// 사용예 : >curl -X GET localhost:3000/json/customers/?
// 사용예 : >curl -X DELETE localhost:3000/json/customers/?
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


// 사용예 : >curl -X GET localhost:3000/json/customersList
// 사용예 : >curl -X PUT localhost:3000/json/customersList
// 사용예 : >curl -X POST localhost:3000/json/customersList
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
        var currPage = 1 // 초기 페이지 (첫페이지 & 변동가능)
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
