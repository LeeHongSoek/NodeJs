const getTotalRowSql = require('./getTotalRowSql')

const tableInfo = {
    tableName: 'orders',
    tableNameKor : '주문',

    searchs : {
                requiredDate :   { nameKor: '',    maxLength: 0 }, 
              },

    fields: {
        orderNumber:    { pk: true,  nameKor: '',  maxLength: 11 },
        orderDate:      { pk: false, nameKor: '',  maxLength: 0 },
        requiredDate:   { pk: false, nameKor: '',  maxLength: 0 },
        shippedDate:    { pk: false, nameKor: '',  maxLength: 0 },
        status:         { pk: false, nameKor: '',  maxLength: 15 },
        comments:       { pk: false, nameKor: '',  maxLength: 0 },
        customerNumber: { pk: false, nameKor: '',  maxLength: 11 },
    },

    selectSqlKeys: `
                    /* selectSqlKeys */
                    SELECT orderNumber 
                      FROM orders 
                     WHERE del = 'N';  `,

    selectSqlList: `
                    /* selectSqlList */
                    SELECT orderNumber
                         , orderDate
                         , requiredDate
                         , shippedDate
                         , status
                         , comments
                         , customerNumber     
                      FROM orders 
                     WHERE del = 'N' ;     `,

    selectSqlOne: `
                    /* selectSqlOne */
                    SELECT orderNumber
                         , orderDate
                         , requiredDate
                         , shippedDate
                         , status
                         , comments
                         , customerNumber   
                      FROM orders 
                     WHERE orderNumber = ?;  `,

    insertSqlOne: `
                    /* insertSqlOne */
                    INSERT INTO orders ( orderNumber
                                       , orderDate
                                       , requiredDate
                                       , shippedDate
                                       , status
                                       , comments
                                       , customerNumber 
                                       ) 
                                VALUES ( ?
                                       , ?
                                       , ?
                                       , ?
                                       , ?
                                       , ?
                                       , ? 
                                       );                  `,

    updateSqlOne: `
                    /* updateSqlOne */
                    UPDATE orders 
                       SET orderDate      = ?
                         , requiredDate   = ?
                         , shippedDate    = ?
                         , status         = ?
                         , comments       = ?
                         , customerNumber = ? 
                     WHERE orderNumber = ?;    `,

    deleteSqlOne: `
                    /* deleteSqlOne */
                    UPDATE orders 
                       SET del = 'Y'
                     WHERE orderNumber = ?; `,

};
module.exports = tableInfo;
