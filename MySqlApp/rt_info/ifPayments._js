const tableInfo = {
    tableName: 'payments',
    fields: {
        customerNumber: { pk: true, maxLength: 11 },
        checkNumber: { pk: true, maxLength: 50 },
        paymentDate: { pk: false, maxLength: null },
        amount: { pk: false, maxLength: null },
    },
    selectSqlKeys: `SELECT customerNumber
, checkNumber 
                                                     FROM payments 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT customerNumber
, checkNumber
, paymentDate
, amount     
                                                 FROM payments 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT customerNumber
, checkNumber
, paymentDate
, amount   
                                                    FROM payments 
                                                   WHERE customerNumber = ?
 AND checkNumber = ?;`,
    insertSqlOne: `INSERT INTO payments (customerNumber
, checkNumber
, paymentDate
, amount) 
                                                       VALUES (?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE payments 
                                                     SET paymentDate = ?
, amount = ? 
                                                   WHERE customerNumber = ?
 AND checkNumber = ?;`,
    deleteSqlOne: `UPDATE payments 
                                                     SET del = 'Y'
                                                   WHERE customerNumber = ?
 AND checkNumber = ?;`,
};
module.exports = tableInfo;
