const tableInfo = {
    tableName: 'orderdetails',
    fields: {
        orderNumber: { pk: true, maxLength: 11 },
        productCode: { pk: true, maxLength: 15 },
        quantityOrdered: { pk: false, maxLength: 11 },
        priceEach: { pk: false, maxLength: null },
        orderLineNumber: { pk: false, maxLength: 6 },
    },
    selectSqlKeys: `SELECT orderNumber
, productCode 
                                                     FROM orderdetails 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT orderNumber
, productCode
, quantityOrdered
, priceEach
, orderLineNumber     
                                                 FROM orderdetails 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT orderNumber
, productCode
, quantityOrdered
, priceEach
, orderLineNumber   
                                                    FROM orderdetails 
                                                   WHERE orderNumber = ?
 AND productCode = ?;`,
    insertSqlOne: `INSERT INTO orderdetails (orderNumber
, productCode
, quantityOrdered
, priceEach
, orderLineNumber) 
                                                       VALUES (?
, ?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE orderdetails 
                                                     SET quantityOrdered = ?
, priceEach = ?
, orderLineNumber = ? 
                                                   WHERE orderNumber = ?
 AND productCode = ?;`,
    deleteSqlOne: `UPDATE orderdetails 
                                                     SET del = 'Y'
                                                   WHERE orderNumber = ?
 AND productCode = ?;`,
};
module.exports = tableInfo;
