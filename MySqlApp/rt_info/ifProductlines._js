const tableInfo = {
    tableName: 'productlines',
    fields: {
        productLine: { pk: true, maxLength: 50 },
        textDescription: { pk: false, maxLength: 4000 },
        htmlDescription: { pk: false, maxLength: null },
        image: { pk: false, maxLength: null },
    },
    selectSqlKeys: `SELECT productLine 
                                                     FROM productlines 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT productLine
, textDescription
, htmlDescription
, image     
                                                 FROM productlines 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT productLine
, textDescription
, htmlDescription
, image   
                                                    FROM productlines 
                                                   WHERE productLine = ?;`,
    insertSqlOne: `INSERT INTO productlines (productLine
, textDescription
, htmlDescription
, image) 
                                                       VALUES (?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE productlines 
                                                     SET textDescription = ?
, htmlDescription = ?
, image = ? 
                                                   WHERE productLine = ?;`,
    deleteSqlOne: `UPDATE productlines 
                                                     SET del = 'Y'
                                                   WHERE productLine = ?;`,
};
module.exports = tableInfo;
