const tableInfo = {
    tableName: 'customers_test',
    fields: {
        customerNumber: { pk: true, maxLength: 11 },
        customerName: { pk: false, maxLength: 50 },
        contactLastName: { pk: false, maxLength: 50 },
        contactFirstName: { pk: false, maxLength: 50 },
        phone: { pk: false, maxLength: 50 },
        addressLine1: { pk: false, maxLength: 50 },
        addressLine2: { pk: false, maxLength: 50 },
        city: { pk: false, maxLength: 50 },
        state: { pk: false, maxLength: 50 },
        postalCode: { pk: false, maxLength: 15 },
        country: { pk: false, maxLength: 50 },
        salesRepEmployeeNumber: { pk: false, maxLength: 11 },
        creditLimit: { pk: false, maxLength: null },
    },
    selectSqlKeys: `SELECT customerNumber 
                                                     FROM customers_test 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT customerNumber
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
                                                 FROM customers_test 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT customerNumber
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
                                                    FROM customers_test 
                                                   WHERE customerNumber = ?;`,
    insertSqlOne: `INSERT INTO customers_test (customerNumber
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
, creditLimit) 
                                                       VALUES (?
, ?
, ?
, ?
, ?
, ?
, ?
, ?
, ?
, ?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE customers_test 
                                                     SET customerName = ?
, contactLastName = ?
, contactFirstName = ?
, phone = ?
, addressLine1 = ?
, addressLine2 = ?
, city = ?
, state = ?
, postalCode = ?
, country = ?
, salesRepEmployeeNumber = ?
, creditLimit = ? 
                                                   WHERE customerNumber = ?;`,
    deleteSqlOne: `UPDATE customers_test 
                                                     SET del = 'Y'
                                                   WHERE customerNumber = ?;`,
};
module.exports = tableInfo;
