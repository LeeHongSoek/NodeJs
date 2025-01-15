const tableInfo = {
    tableName: 'customers',
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
                                                     FROM customers 
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
                                                 FROM customers 
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
                                                    FROM customers 
                                                   WHERE customerNumber = ?;`,
    insertSqlOne: `INSERT INTO customers (customerNumber
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
    updateSqlOne: `UPDATE customers 
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
    deleteSqlOne: `UPDATE customers 
                                                     SET del = 'Y'
                                                   WHERE customerNumber = ?;`,
};
module.exports = tableInfo;
