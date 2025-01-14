const getTotalRowSql = require('./getTotalRowSql')   
                                                      
 const tableInfo = {                                  
                                                      
     tableName : 'offices', 
     tableNameKor : '',                             
                                                      
  fields :  {                                         
 officeCode : { pk:true,     nameKor: '', isListView: true, maxLength:  }  ,
 city : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
 phone : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
 addressLine1 : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
 addressLine2 : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
 state : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
 country : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
 postalCode : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
 territory : { pk:false,     nameKor: '', isListView: true, maxLength:  }  ,
            },                                        
                                                      
 }                                                    
                                                      
 module.exports = tableInfo                           
