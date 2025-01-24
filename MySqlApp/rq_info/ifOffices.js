const getTotalRowSql = require('./getTotalRowSql')

const tableInfo = {
    tableName: 'offices',
    tableNameKor : '사무실',

    searchs : {
                 addressLine1:   { nameKor: '주소1',    maxLength: 50  }, 
                 state:          { nameKor: '주',       maxLength: 50 }, 
              },

    fields: {
        officeCode:    { pk: true,  nameKor: '사무실코드', maxLength: 10 },
        city:          { pk: false, nameKor: '도시',       maxLength: 50 },
        phone:         { pk: false, nameKor: '전화번호',   maxLength: 50 },
        addressLine1:  { pk: false, nameKor: '주소1',      maxLength: 50 },
        addressLine2:  { pk: false, nameKor: '주소2',      maxLength: 50 },
        state:         { pk: false, nameKor: '주',         maxLength: 50 },
        country:       { pk: false, nameKor: '국각',       maxLength: 50 },
        postalCode:    { pk: false, nameKor: '우편번호',   maxLength: 15 },
        territory:     { pk: false, nameKor: '지역',       maxLength: 10 },
    },
    
    selectSqlKeys: `
                    /* selectSqlKeys */
                    SELECT officeCode 
                      FROM offices 
                     WHERE del = 'N';      `,

    selectSqlList: `
                    /* selectSqlList */
                    SELECT officeCode
                         , city
                         , phone
                         , addressLine1
                         , addressLine2
                         , state
                         , country
                         , postalCode
                         , territory     
                      FROM offices 
                     WHERE del = 'N' ;    `,

    selectSqlOne: `
                   /* selectSqlOne */
                   SELECT officeCode
                        , city
                        , phone
                        , addressLine1
                        , addressLine2
                        , state
                        , country
                        , postalCode
                        , territory   
                     FROM offices 
                    WHERE officeCode = ?;  `,

    insertSqlOne: `
                   /* insertSqlOne */
                   INSERT INTO offices ( officeCode
                                       , city
                                       , phone
                                       , addressLine1
                                       , addressLine2
                                       , state
                                       , country
                                       , postalCode
                                       , territory
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
                                       );           `,

    updateSqlOne: `
                   /* updateSqlOne */
                   UPDATE offices 
                      SET city         = ?
                        , phone        = ?
                        , addressLine1 = ?
                        , addressLine2 = ?
                        , state        = ?
                        , country      = ?
                        , postalCode   = ?
                        , territory    = ? 
                   WHERE officeCode = ?;    `,

    deleteSqlOne: `
                   /* deleteSqlOne */
                   UPDATE offices 
                      SET del = 'Y'
                    WHERE officeCode = ?;  `,

};
module.exports = tableInfo;
