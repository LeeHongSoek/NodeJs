const getTotalRowSql = require('./getTotalRowSql')   
                                                      
 const tableInfo = {                                  
                                                      
     tableName : 'offices', 
     tableNameKor : '',                             
                                                      
  fields :  {                                         
 officeCode : { pk:true,     nameKor: '', isListView: true, maxLength: 10 }  ,
 city : { pk:false,     nameKor: '', isListView: true, maxLength: 50 }  ,
 phone : { pk:false,     nameKor: '', isListView: true, maxLength: 50 }  ,
 addressLine1 : { pk:false,     nameKor: '', isListView: true, maxLength: 50 }  ,
 addressLine2 : { pk:false,     nameKor: '', isListView: true, maxLength: 50 }  ,
 state : { pk:false,     nameKor: '', isListView: true, maxLength: 50 }  ,
 country : { pk:false,     nameKor: '', isListView: true, maxLength: 50 }  ,
 postalCode : { pk:false,     nameKor: '', isListView: true, maxLength: 15 }  ,
 territory : { pk:false,     nameKor: '', isListView: true, maxLength: 10 }  ,
            },                                        
                                                      
getTotalRowSql, // 전체 레코드수를 구하는 쿼리          
                                                      
 }                                                    
                                                      
 module.exports = tableInfo                           
