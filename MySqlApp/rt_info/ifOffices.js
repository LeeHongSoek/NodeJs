const getTotalRowSql = require('./getTotalRowSql')   
                                                      
 const tableInfo = {                                  
                                                      
     tableName : 'offices', 
     tableNameKor : '',                             
                                                      
     fields :  {                                         
                    officeCode : { pk:true,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    city : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    phone : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    addressLine1 : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    addressLine2 : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    state : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    country : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    postalCode : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
                    territory : { pk:false,     nameKor: '',     isListView: ,   maxLength:  }  ,
            },                                        
                                                      
 }                                                    
                                                      
 module.exports = tableInfo                           
