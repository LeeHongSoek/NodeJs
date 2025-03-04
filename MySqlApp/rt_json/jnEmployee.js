const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기
const pool = require('../_MySqlDatabase/connection')
const employeesInfo = require('../rq_info/ifEmployees')
const pageInfo = require('../rq_info/ifPage')

router.use('/', (req, res, next) => {

    console.log(`요청 [${req.method}] [/] ${req.originalUrl}`)
    console.log(`req.query : `);
    console.dir(req.query, { depth: null, colors: true });

    next(); // 다음 미들웨어 또는 라우터로 넘어감
});


/**
 *  @swagger
 *  /json/employee:
 *    get:
 *      tags:
 *      - product
 *      description: 페이지 단위로 리스트 읽기 ...
 *      parameters:
 *        - in: query
 *          name: lastName
 *          schema:
 *            type: string
 *          required: false
 *          description: 직원명_성
 *        - in: query
 *          name: jobTitle
 *          schema:
 *            type: string
 *          required: false
 *          description: 직군
*      responses:
 *        200:
 *          description: (n) 개의 레코드를 리턴합니다.
 */ 
router.get('/', (req, res) => {

    var currPage = req.query.currPage || 1; // currPage 값이 없으면 기본값으로 1을 설정 // 초기 페이지 (첫페이지 & 변동가능)
    var sqlLastSelectKeys = employeesInfo.selectSqlKeys // select 문!!
    var sqlLastSelectList = employeesInfo.selectSqlList // select 문!!

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
    
                var keysSearchs = Object.keys(employeesInfo.searchs); // 등록된 검색 키를 대조해서 쿼리를 구성한다.
                for (var keysSearchs in keysSearchs) {
                    if ((keyQuery === keysSearchs) && (req.query[fieldName] !='')) {
                        sqlLastSelectKeys = sqlLastSelectKeys + `\n   AND  ${fieldName} like '${req.query[fieldName]}%' `
                        sqlLastSelectList = sqlLastSelectList + `\n   AND  ${fieldName} like '${req.query[fieldName]}%' `
                    }
                }
            }
            var totalRowSql = employeesInfo.getTotalRowSql(sqlLastSelectKeys)  // 총 건수를 구하기 위한 쿼리를 구성한다

            console.info(`실행 : ${totalRowSql}`)
            return connect.execute(totalRowSql)                            
        })
        .then(([counters]) => {                                
            pageInfo.totalRow = counters[0].total_row // 총 레코드 수
            if (pageInfo.currPage != -1)
                sqlLastSelectList += ` limit ${pageInfo.limitFrom}, ${pageInfo.limitTo} ` // 페이지에 해당하는 limit가 구성되었다...

            console.info(`실행 : ${sqlLastSelectList}`)
            return connect.execute(sqlLastSelectList)
        })
        .then(([data]) => {
            //data.map((data) => {console.info(`data.employeeNumber : ${data.employeeNumber}`)})
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
 *  /json/employee:
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

            console.info(`실행 : ${connect.format(employeesInfo.updateSqlOne, [ formData.lastName
                                                                                , formData.firstName
                                                                                , formData.extension
                                                                                , formData.email
                                                                                , formData.officeCode
                                                                                , formData.reportsTo
                                                                                , formData.jobTitle
                                                                                , formData.employeeNumber
                                                                                ])}`)
            return connect.execute(employeesInfo.updateSqlOne, [ formData.lastName
                                                                , formData.firstName
                                                                , formData.extension
                                                                , formData.email
                                                                , formData.officeCode
                                                                , formData.reportsTo
                                                                , formData.jobTitle
                                                                , formData.employeeNumber
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
                sql     : `${connect.format(employeesInfo.updateSqlOne, [ formData.lastName
                                                                        , formData.firstName
                                                                        , formData.extension
                                                                        , formData.email
                                                                        , formData.officeCode
                                                                        , formData.reportsTo
                                                                        , formData.jobTitle
                                                                        , formData.employeeNumber
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
 *  /json/employee:
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

            console.info(`실행 : ${connect.format(employeesInfo.insertSqlOne, [ formData.lastName
                                                                                , formData.firstName
                                                                                , formData.extension
                                                                                , formData.email
                                                                                , formData.officeCode
                                                                                , formData.reportsTo
                                                                                , formData.jobTitle
                                                                                ])}`)
            return connect.execute(employeesInfo.insertSqlOne, [ formData.lastName
                                                                , formData.firstName
                                                                , formData.extension
                                                                , formData.email
                                                                , formData.officeCode
                                                                , formData.reportsTo
                                                                , formData.jobTitle
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
                sql     :  `${connect.format(employeesInfo.insertSqlOne, [ formData.employeeNumber
                                                                            , formData.lastName
                                                                            , formData.firstName
                                                                            , formData.extension
                                                                            , formData.email
                                                                            , formData.officeCode
                                                                            , formData.reportsTo
                                                                            , formData.jobTitle
                                                                            ])}`,
                error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})



router.use('/:employeeNumber', (req, res, next) => {

    console.log(`요청 [${req.method}] [/:employeeNumber] ${req.originalUrl}`)
    console.log(` req.params.employeeNumber = ${req.params.employeeNumber}`)

    next(); // 다음 미들웨어 또는 라우터로 넘어감
})
 
/**
 *  @swagger
 *  /json/employee/{employeeNumber}:
 *    get:
 *      tags:
 *      - product
 *      description: 해당 사원의 정보를 읽기
 *      parameters:
 *        - in: path
 *          name: employeeNumber
 *          schema:
 *            type: integer
 *          required: true
 *          description: 사원 번호
 *      responses:
 *        200:
 *          description: (n) 개의 레코드를 리턴합니다.
 */ 
router.get('/:employeeNumber', (req, res, next) => {

    let connect // mariaDB 커넥션..

    pool.connectStart()
        .then((connection)=>{                             
            connect = connection

            console.info(`실행 : ${connect.format(employeesInfo.selectSqlOne, [req.params.employeeNumber])}`)
            return connect.execute(employeesInfo.selectSqlOne, [req.params.employeeNumber])
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
                sql     : `${connect.format(employeesInfo.selectSqlOne, [req.params.employeeNumber])}`, 
                error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})

/**
 *  @swagger
 *  /json/employee/{employeeNumber}:
 *    delete:
 *      tags:
 *      - product
 *      description: 해당 사원의 정보를 삭제
 *      parameters:
 *        - in: path
 *          name: employeeNumber
 *          schema:
 *            type: integer
 *          required: true
 *          description: 사원 번호
 *      responses:
 *        200:
 *          description: (n) 개의 레코드가 삭제되었습니다.
 */ 
router.delete('/:employeeNumber', (req, res, next) => {
    
    let connect // mariaDB 커넥션..
    pool.connectStart()
        .then((connection)=>{                             
            connect = connection

            console.info(`실행 : ${connect.format(employeesInfo.deleteSqlOne, [req.params.employeeNumber])}`)
            return connect.execute(employeesInfo.deleteSqlOne, [req.params.employeeNumber])
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
                sql     : `${connect.format(employeesInfo.deleteSqlOne, [req.params.employeeNumber])}`,
                error
            })                
        })
        .finally(() => {
            if (connect) connect.end();
        });
})


module.exports = router
