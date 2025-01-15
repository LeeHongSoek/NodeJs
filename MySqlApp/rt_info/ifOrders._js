const tableInfo = {
    tableName: 'orders',
    fields: {
        orderNumber: { pk: true, maxLength: 11 },
        orderDate: { pk: false, maxLength: null },
        requiredDate: { pk: false, maxLength: null },
        shippedDate: { pk: false, maxLength: null },
        status: { pk: false, maxLength: 15 },
        comments: { pk: false, maxLength: null },
        customerNumber: { pk: false, maxLength: 11 },
    },
    selectSqlKeys: `SELECT orderNumber 
                                                     FROM orders 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT orderNumber
, orderDate
, requiredDate
, shippedDate
, status
, comments
, customerNumber     
                                                 FROM orders 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT orderNumber
, orderDate
, requiredDate
, shippedDate
, status
, comments
, customerNumber   
                                                    FROM orders 
                                                   WHERE orderNumber = ?;`,
    insertSqlOne: `INSERT INTO orders (orderNumber
, orderDate
, requiredDate
, shippedDate
, status
, comments
, customerNumber) 
                                                       VALUES (?
, ?
, ?
, ?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE orders 
                                                     SET orderDate = ?
, requiredDate = ?
, shippedDate = ?
, status = ?
, comments = ?
, customerNumber = ? 
                                                   WHERE orderNumber = ?;`,
    deleteSqlOne: `UPDATE orders 
                                                     SET del = 'Y'
                                                   WHERE orderNumber = ?;`,
};
module.exports = tableInfo;
