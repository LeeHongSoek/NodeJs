const tableInfo = {
    tableName: 'employees',
    fields: {
        employeeNumber: { pk: true, maxLength: 11 },
        lastName: { pk: false, maxLength: 50 },
        firstName: { pk: false, maxLength: 50 },
        extension: { pk: false, maxLength: 10 },
        email: { pk: false, maxLength: 100 },
        officeCode: { pk: false, maxLength: 10 },
        reportsTo: { pk: false, maxLength: 11 },
        jobTitle: { pk: false, maxLength: 50 },
    },
    selectSqlKeys: `SELECT employeeNumber 
                                                     FROM employees 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT employeeNumber
, lastName
, firstName
, extension
, email
, officeCode
, reportsTo
, jobTitle     
                                                 FROM employees 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT employeeNumber
, lastName
, firstName
, extension
, email
, officeCode
, reportsTo
, jobTitle   
                                                    FROM employees 
                                                   WHERE employeeNumber = ?;`,
    insertSqlOne: `INSERT INTO employees (employeeNumber
, lastName
, firstName
, extension
, email
, officeCode
, reportsTo
, jobTitle) 
                                                       VALUES (?
, ?
, ?
, ?
, ?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE employees 
                                                     SET lastName = ?
, firstName = ?
, extension = ?
, email = ?
, officeCode = ?
, reportsTo = ?
, jobTitle = ? 
                                                   WHERE employeeNumber = ?;`,
    deleteSqlOne: `UPDATE employees 
                                                     SET del = 'Y'
                                                   WHERE employeeNumber = ?;`,
};
module.exports = tableInfo;
