const table_info = {
        tableName: 'customers',
        tableNameKor: '고객',

        searchs:  {customerName:    { nameKor: '상호명',    maxLength: 50 },
                   contactLastName: { nameKor: '담당자_성', maxLength: 50 }
                  },
        fields :  {customerNumber:         { nameKor: '고객번호',         isListView: false,   maxLength: 50 },
                   customerName:           { nameKor: '상호명',           isListView: true,    maxLength: 50 },
                   contactLastName:        { nameKor: '담당자_성',        isListView: true,    maxLength: 50 },
                   contactFirstName:       { nameKor: '담당자_이름',      isListView: true,    maxLength: 50 },
                   phone:                  { nameKor: '전화',             isListView: true,    maxLength: 50 },
                   addressLine1:           { nameKor: '주소1',            isListView: true,    maxLength: 50 },
                   addressLine2:           { nameKor: '주소2',            isListView: true,    maxLength: 50 },
                   city:                   { nameKor: '시',               isListView: true,    maxLength: 50 },
                   state:                  { nameKor: '주',               isListView: true,    maxLength: 50 },
                   postalCode:             { nameKor: '우편번호',         isListView: true,    maxLength: 50 },
                   country:                { nameKor: '국가',             isListView: true,    maxLength: 50 },
                   salesRepEmployeeNumber: { nameKor: '담당영업사원번호', isListView: true,    maxLength: 4 },
                   creditLimit:            { nameKor: '신용한도',         isListView: false,   maxLength: 10 }
                  },
                  
        selectSql : `
                  SELECT customerNumber
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
                   WHERE del = 'N' `,

        selectSqlOne : `
                  SELECT customerNumber
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
                   WHERE del = 'N'
                     AND customerNumber = ?  `,

        deleteSqlOne : `
                  UPDATE customers 
                     SET del = 'Y'   
                   WHERE customerNumber = ?  `

}

module.exports = table_info