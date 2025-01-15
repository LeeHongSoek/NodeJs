const tableInfo = {
    tableName: 'products',
    fields: {
        productCode: { pk: true, maxLength: 15 },
        productName: { pk: false, maxLength: 70 },
        productLine: { pk: false, maxLength: 50 },
        productScale: { pk: false, maxLength: 10 },
        productVendor: { pk: false, maxLength: 50 },
        productDescription: { pk: false, maxLength: null },
        quantityInStock: { pk: false, maxLength: 6 },
        buyPrice: { pk: false, maxLength: null },
        MSRP: { pk: false, maxLength: null },
    },
    selectSqlKeys: `SELECT productCode 
                                                     FROM products 
                                                    WHERE del = 'N';`,
    selectSql: `SELECT productCode
, productName
, productLine
, productScale
, productVendor
, productDescription
, quantityInStock
, buyPrice
, MSRP     
                                                 FROM products 
                                                WHERE del = 'N' ;`,
    selectSqlOne: `SELECT productCode
, productName
, productLine
, productScale
, productVendor
, productDescription
, quantityInStock
, buyPrice
, MSRP   
                                                    FROM products 
                                                   WHERE productCode = ?;`,
    insertSqlOne: `INSERT INTO products (productCode
, productName
, productLine
, productScale
, productVendor
, productDescription
, quantityInStock
, buyPrice
, MSRP) 
                                                       VALUES (?
, ?
, ?
, ?
, ?
, ?
, ?
, ?
, ?);`,
    updateSqlOne: `UPDATE products 
                                                     SET productName = ?
, productLine = ?
, productScale = ?
, productVendor = ?
, productDescription = ?
, quantityInStock = ?
, buyPrice = ?
, MSRP = ? 
                                                   WHERE productCode = ?;`,
    deleteSqlOne: `UPDATE products 
                                                     SET del = 'Y'
                                                   WHERE productCode = ?;`,
};
module.exports = tableInfo;
