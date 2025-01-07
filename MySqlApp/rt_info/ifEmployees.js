const getTotalRowSql = require('./getTotalRowSql')

const tableInfo = {

    tableName : 'employees',
    tableNameKor : '직원',

    searchs : {lastName:    { nameKor: '직원_성', maxLength: 50 },
               jobTitle:    { nameKor: '직군',    maxLength: 50 }
              },
    fields :  {employeeNumber: { pk:true,  nameKor: '직원번호',  isListView: false,   maxLength: 4 },
               lastName:       { pk:false, nameKor: '직원_성',   isListView: true,    maxLength: 50 },
               firstName:      { pk:false, nameKor: '직원_이름', isListView: true,    maxLength: 50 },
               extension:      { pk:false, nameKor: '확장',      isListView: true,    maxLength: 10 },
               email:          { pk:false, nameKor: '이메일',    isListView: true,    maxLength: 100 },
               officeCode:     { pk:false, nameKor: '부서코드',  isListView: true,    maxLength: 10 },
               reportsTo:      { pk:false, nameKor: '상사코드',  isListView: true,    maxLength: 4 },
               jobTitle:       { pk:false, nameKor: '직군',      isListView: true,    maxLength: 50 }
              },
    
    getTotalRowSql, // 전체 레코드수를 구하는 쿼리를 만드는 함수는 공통으로 뽑았다..

    selectSql : ` /* selectSql */
                  SELECT employeeNumber
                       , lastName
                       , firstName
                       , extension
                       , email
                       , officeCode
                       , reportsTo
                       , jobTitle
                    FROM employees 
                   WHERE del = 'N' 
               `,
 
    ackType : '', // edit, view, insert
    pk_value : '',

    selectSqlOne : ` /* selectSqlOne */
                     SELECT employeeNumber
                          , lastName
                          , firstName
                          , extension
                          , email
                          , officeCode
                          , reportsTo
                          , jobTitle
                       FROM employees 
                      WHERE del = 'N'
                        AND employeeNumber = ?   
                  `,

    deleteSqlOne : ` /* deleteSqlOne */
                     UPDATE employees 
                        SET del = 'Y'   
                      WHERE employeeNumber = ?   
                  `
}

module.exports = tableInfo