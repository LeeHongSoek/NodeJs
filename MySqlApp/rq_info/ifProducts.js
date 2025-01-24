const getTotalRowSql = require('./getTotalRowSql')

const tableInfo = {
    tableName: 'products',
    tableNameKor : '제품',

    searchs : {
                 productName :   { nameKor: '제품명',    maxLength:  70},
              },

    fields: {
        productCode:        { pk: true,   nameKor: '제품코드',  maxLength: 15 },
        productName:        { pk: false,  nameKor: '제품명',  maxLength: 70 },
        productLine:        { pk: false,  nameKor: '',  maxLength: 50 },
        productScale:       { pk: false,  nameKor: '',  maxLength: 10 },
        productVendor:      { pk: false,  nameKor: '',  maxLength: 50 },
        productDescription: { pk: false,  nameKor: '',  maxLength: 0 },
        quantityInStock:    { pk: false,  nameKor: '',  maxLength: 6 },
        buyPrice:           { pk: false,  nameKor: '',  maxLength: 0 },
        MSRP:               { pk: false,  nameKor: '',  maxLength: 0 },
    },

    selectSqlKeys: `
                    /* selectSqlKeys */
                    SELECT productCode 
                      FROM products 
                     WHERE del = 'N';`,

    selectSqlList: `
                    /* selectSqlList */
                    SELECT productCode
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

    selectSqlOne: `
                    /* selectSqlOne */
                    SELECT productCode
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

    insertSqlOne: `
                    /* insertSqlOne */
                    INSERT INTO products ( productCode
                                         , productName
                                         , productLine
                                         , productScale
                                         , productVendor
                                         , productDescription
                                         , quantityInStock
                                         , buyPrice
                                         , MSRP 
                                         ) 
                                  VALUES ( ?
                                         , ?
                                         , ?
                                         , ?
                                         , ?
                                         , ?
                                         , ?
                                         , ?
                                         , ? 
                                         );    `,

    updateSqlOne: `
                    /* updateSqlOne */
                    UPDATE products 
                       SET productName        = ?
                         , productLine        = ?
                         , productScale       = ?
                         , productVendor      = ?
                         , productDescription = ?
                         , quantityInStock    = ?
                         , buyPrice           = ?
                         , MSRP               = ? 
                     WHERE productCode = ?;`,

    deleteSqlOne: `
                    /* deleteSqlOne */
                    UPDATE products 
                       SET del = 'Y'
                     WHERE productCode = ?;`,

};
module.exports = tableInfo;
