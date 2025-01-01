const getTotalRowSql = require('./getTotalRowSql')

const tableInfo = {

    tableName : 'customers',
    tableNameKor : '고객',

    searchs : {customerName:    { nameKor: '상호명',    maxLength: 50 },
               contactLastName: { nameKor: '담당자_성', maxLength: 50 }
              },
    fields :  {customerNumber:         { nameKor: '고객번호',         isListView: false,   maxLength: 4 },
               customerName:           { nameKor: '상호명',           isListView: true,    maxLength: 50 },
               contactLastName:        { nameKor: '담당자_성',        isListView: true,    maxLength: 50 },
               contactFirstName:       { nameKor: '담당자_이름',      isListView: true,    maxLength: 50 },
               phone:                  { nameKor: '전화',             isListView: true,    maxLength: 50 },
               addressLine1:           { nameKor: '주소1',            isListView: true,    maxLength: 50 },
               addressLine2:           { nameKor: '주소2',            isListView: true,    maxLength: 50 },
               city:                   { nameKor: '시',               isListView: true,    maxLength: 50 },
               state:                  { nameKor: '주',               isListView: true,    maxLength: 50 },
               postalCode:             { nameKor: '우편번호',         isListView: true,    maxLength: 50 },
               country:                { nameKor: '국가',             isListView: true,    maxLength: 50 },
               salesRepEmployeeNumber: { nameKor: '담당영업사원번호', isListView: true,    maxLength: 4 },
               creditLimit:            { nameKor: '신용한도',         isListView: false,   maxLength: 10 }
              },
    
    getTotalRowSql, // 전체 레코드수를 구하는 쿼리를 만드는 함수는 공통으로 뽑았다.. // require('./getTotalRowSql')

    selectSqlKeys : `
                    SELECT customerNumber
                      FROM customers
                     WHERE del = 'N' 
                   `,

    selectSql : `
                SELECT customerNumber
                     , customerName
                     , contactLastName
                     , contactFirstName
                     , phone
                     , addressLine1
                     , addressLine2
                     , city
                     , state
                     , postalCode
                     , country
                     , salesRepEmployeeNumber
                     , creditLimit
                  FROM customers
                 WHERE del = 'N' 
             `,

    selectSqlOne : `
                     SELECT customerNumber
                          , customerName
                          , contactLastName
                          , contactFirstName
                          , phone
                          , addressLine1
                          , addressLine2
                          , city
                          , state
                          , postalCode
                          , country
                          , salesRepEmployeeNumber
                          , creditLimit
                       FROM customers
                      WHERE del = 'N'
                        AND customerNumber = ?  
                  `,

    deleteSqlOne : `
                    UPDATE customers 
                       SET del = 'Y'   
                     WHERE customerNumber = ?  
                  `
}

module.exports = tableInfo