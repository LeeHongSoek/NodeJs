const mysql = require('mysql2/promise'); // npm install -S mysql2
const fs = require('fs');
const path = require('path')
require('dotenv').config({path : path.join(__dirname, 'config_local.env')}) // npm install dotenv
//require('dotenv').config({path : path.join(__dirname, 'config_remote.env')})

const connectInfo = {
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    port            : process.env.DB_PORT,
    database        : process.env.DB_DATABASE,
    connectionLimit : 30
}


const mksp = (n) => {
    if (n <= 0) {
      return '';
    }
    return ' '.repeat(n);
};

const extractNumber = (input) => {
    try {
        const match = input.match(/\((\d+)\)/);
        return match ? parseInt(match[1], 10) : null;
    } catch {
        return 0;
    }
};

const pool = {
    connectStart: () => {
        return mysql.createConnection(connectInfo)
            .then((connection) => {
                return connection;
            })
    },
    connectRunQueries: () => {
        let connect

        return mysql.createConnection(connectInfo)
            .then((connection) => {
                connect = connection
                
                // Get all table names
                return connect.execute('SHOW TABLES');
            })
            .then(([showTables]) => {
                console.log('Tables:', showTables);

                const tablePromises = showTables.map((table) => {
                    const tableName = table[`Tables_in_classicmodels`];
                    const rtInfoDir = path.join(__dirname, '..', 'r__info');
                    const fileName = `if${tableName.charAt(0).toUpperCase() + tableName.slice(1)}._js`;
                    const filePath = path.join(rtInfoDir, fileName);

                    return connect.execute(`SHOW COLUMNS FROM ${tableName}`)
                        .then(([rawColumns]) => {
                            const columns = rawColumns.filter((col) => col.Field !== 'del');
                            console.log(`Columns for ${tableName}:`, columns);

                            const primaryKeys = columns.filter((column) => column.Key === 'PRI');
                            const nonPrimaryColumns = columns.filter((col) => col.Key !== 'PRI' && col.Field !== 'del');
                            
                            const selectSqlKeys  = `
                    /* selectSqlKeys */
                    SELECT ${primaryKeys.length > 0 ? primaryKeys.map((pk) => pk.Field).join('\n'+mksp(25)+', ') : '*'} 
                      FROM ${tableName} 
                     WHERE del = 'N' ;    `;

                            const selectSqlList  = `
                    /* selectSqlList */
                    SELECT ${columns.map((col) => col.Field).join('\n'+mksp(25)+', ')}     
                      FROM ${tableName} 
                     WHERE del = 'N'  ;    `;

                            const selectSqlOne   = `
                    /* selectSqlOne */
                    SELECT ${columns.map((col) => col.Field).join('\n'+mksp(25)+', ')}   
                      FROM ${tableName} 
                     WHERE ${primaryKeys.length > 0 ? primaryKeys.map((pk) => `${pk.Field} = ?`).join('\n'+mksp(23)+'AND ') : 'id = ?'} ;    `;

                            const insertSqlOne   = `
                    /* insertSqlOne */
                    INSERT INTO ${tableName} ( ${columns.map((col) => col.Field).join('\n'+mksp(tableName.length+33)+', ')} \n${mksp(tableName.length+33)}) 
                       ${mksp(tableName.length)}   VALUES ( ${columns.map(() => '?').join('\n'+mksp(tableName.length+33)+', ')} \n${mksp(tableName.length+33)}) ;    `;

                            const updateSqlOne   = `
                    /* updateSqlOne */
                    UPDATE ${tableName} 
                       SET ${nonPrimaryColumns.map((col) => `${col.Field} = ?`).join('\n'+mksp(25)+', ')} 
                     WHERE ${primaryKeys.length > 0 ? primaryKeys.map((pk) => `${pk.Field} = ?`).join('\n'+mksp(23)+'AND ') : 'id = ?'} ;    `;

                            const deleteSqlOne   = `
                    /* deleteSqlOne */
                    UPDATE ${tableName} 
                       SET del = 'Y'
                     WHERE ${primaryKeys.length > 0 ? primaryKeys.map((pk) => `${pk.Field} = ?`).join('\n'+mksp(23)+'AND ') : 'id = ?'} ;    `;

                            console.log('Generated SQL Statements:', { selectSqlKeys, selectSqlList, selectSqlOne, insertSqlOne, updateSqlOne, deleteSqlOne });

                            if (!fs.existsSync(rtInfoDir)) {
                                fs.mkdirSync(rtInfoDir);
                            }

                            fs.writeFileSync(filePath, `const getTotalRowSql = require('./getTotalRowSql')\n`);
                            fs.appendFileSync(filePath, `\n`);
                            fs.appendFileSync(filePath, `const tableInfo = {\n`);
                            fs.appendFileSync(filePath, `    tableName: '${tableName}',\n`);
                            fs.appendFileSync(filePath, `    tableNameKor : '',\n`);
                            fs.appendFileSync(filePath, `\n`);
                            fs.appendFileSync(filePath, `    searchs : {\n`);
                            fs.appendFileSync(filePath, `                     :   { nameKor: '',    maxLength:  }, \n`);
                            fs.appendFileSync(filePath, `              },\n\n`);
                            fs.appendFileSync(filePath, `    fields: {\n`);
                            let maxleng = 0
                            columns.forEach((col) => {
                                
                                maxleng = (maxleng < col.Field.length) ? col.Field.length : maxleng ;
                            });
                            columns.forEach((col) => {
                                const size = extractNumber(col.Type);
                                fs.appendFileSync(filePath, `${mksp(7)} ${col.Field} ${mksp(maxleng-col.Field.length)}: { pk: ${col.Key === 'PRI'?'true ':'false'},  nameKor: '',  maxLength: ${size} },\n`);
                            });
                            fs.appendFileSync(filePath, `    },\n\n`);
                            fs.appendFileSync(filePath, `    selectSqlKeys: \`${selectSqlKeys}\`,\n\n`);
                            fs.appendFileSync(filePath, `    selectSqlList: \`${selectSqlList}\`,\n\n`);
                            fs.appendFileSync(filePath, `    selectSqlOne: \`${selectSqlOne}\`,\n\n`);
                            fs.appendFileSync(filePath, `    insertSqlOne: \`${insertSqlOne}\`,\n\n`);
                            fs.appendFileSync(filePath, `    updateSqlOne: \`${updateSqlOne}\`,\n\n`);
                            fs.appendFileSync(filePath, `    deleteSqlOne: \`${deleteSqlOne}\`,\n\n`);
                            fs.appendFileSync(filePath, `};\n`);
                            fs.appendFileSync(filePath, `module.exports = tableInfo;\n`);

                            console.log(`${fileName} 파일 생성 완료`);
                        })
                        .catch((error) => {
                            console.error(`Error processing table ${tableName}:`, error);
                        });
                });                

                return Promise.all(tablePromises);
            })
            .then(() => {
                console.error(`connect.end()`);
                connect.end()
            })
            .catch((error) => {
                console.error('sql에 에러 발생 : ', error);

                res.status(500).send({
                    success : false, 
                    message : 'sql에 에러 발생',
                    sql     : `SHOW COLUMNS FROM []`, 
                    error
                })        
            });
    }
};

module.exports = pool



