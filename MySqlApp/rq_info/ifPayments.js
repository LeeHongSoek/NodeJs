const getTotalRowSql = require('./getTotalRowSql')

const tableInfo = {
    tableName: 'payments',
    tableNameKor : '지불',

    searchs : {
                amount :   { nameKor: '지불금액',    maxLength: 0 }, 
              },

    fields: {
        customerNumber: { pk: true,    nameKor: '고객코드',  maxLength: 11 },
        checkNumber:    { pk: true,    nameKor: '체크번호',  maxLength: 50 },
        paymentDate:    { pk: false,   nameKor: '지불일자',  maxLength: 0 },
        amount:         { pk: false,   nameKor: '지불금액',  maxLength: 0 },
    },

    selectSqlKeys: `
                    /* selectSqlKeys */
                    SELECT customerNumber
                         , checkNumber 
                      FROM payments 
                     WHERE del = 'N';      `,

    selectSqlList: `
                    /* selectSqlList */
                    SELECT customerNumber
                         , checkNumber
                         , paymentDate
                         , amount     
                      FROM payments 
                     WHERE del = 'N' ;    `,

    selectSqlOne: `
                    /* selectSqlOne */
                    SELECT customerNumber
                         , checkNumber
                         , paymentDate
                         , amount   
                      FROM payments 
                     WHERE customerNumber = ?
                       AND checkNumber = ?;        `,

    insertSqlOne: `
                    /* insertSqlOne */
                    INSERT INTO payments ( customerNumber
                                         , checkNumber
                                         , paymentDate
                                         , amount 
                                         ) 
                                  VALUES ( ?
                                         , ?
                                         , ?
                                         , ? 
                                         );                `,

    updateSqlOne: `
                    /* updateSqlOne */
                    UPDATE payments 
                       SET paymentDate = ?
                         , amount      = ? 
                     WHERE customerNumber = ?
                       AND checkNumber = ?;  `,

    deleteSqlOne: `
                    /* deleteSqlOne */
                    UPDATE payments 
                       SET del = 'Y'
                     WHERE customerNumber = ?
                       AND checkNumber = ?;      `,

};
module.exports = tableInfo;
