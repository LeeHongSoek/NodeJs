const tableInfo = {
    tableName: 'offices',
    fields: {
        officeCode: { pk: true, maxLength: 10 },
        city: { pk: false, maxLength: 50 },
        phone: { pk: false, maxLength: 50 },
        addressLine1: { pk: false, maxLength: 50 },
        addressLine2: { pk: false, maxLength: 50 },
        state: { pk: false, maxLength: 50 },
        country: { pk: false, maxLength: 50 },
        postalCode: { pk: false, maxLength: 15 },
        territory: { pk: false, maxLength: 10 },
    },
    selectSqlKeys: `SELECT officeCode 
                                                     FROM offices 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT officeCode
, city
, phone
, addressLine1
, addressLine2
, state
, country
, postalCode
, territory     
                                                 FROM offices 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT officeCode
, city
, phone
, addressLine1
, addressLine2
, state
, country
, postalCode
, territory   
                                                    FROM offices 
                                                   WHERE officeCode = ?;`,
    insertSqlOne: `INSERT INTO offices (officeCode
, city
, phone
, addressLine1
, addressLine2
, state
, country
, postalCode
, territory) 
                                                       VALUES (?
, ?
, ?
, ?
, ?
, ?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE offices 
                                                     SET city = ?
, phone = ?
, addressLine1 = ?
, addressLine2 = ?
, state = ?
, country = ?
, postalCode = ?
, territory = ? 
                                                   WHERE officeCode = ?;`,
    deleteSqlOne: `UPDATE offices 
                                                     SET del = 'Y'
                                                   WHERE officeCode = ?;`,
};
module.exports = tableInfo;
