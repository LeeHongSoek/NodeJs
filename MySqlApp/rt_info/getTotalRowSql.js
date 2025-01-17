// 전체 레코드수를 구하는 쿼리를 만드는 함수는 공통으로 뽑았다..
getTotalRowSql = (selectSqlKeys) => {
    return `      /* getTotalRowSql */
             SELECT count(*) AS total_row 
               FROM ( ${selectSqlKeys}  
                    ) A 
          `
}

module.exports =  getTotalRowSql