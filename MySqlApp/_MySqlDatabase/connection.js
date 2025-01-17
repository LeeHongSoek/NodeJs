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
                    const rtInfoDir = path.join(__dirname, '..', 'rt_info');
                    const fileName = `if${tableName.charAt(0).toUpperCase() + tableName.slice(1)}._js`;
                    const filePath = path.join(rtInfoDir, fileName);

                    return connect.execute(`SHOW COLUMNS FROM ${tableName}`)
                        .then(([rawColumns]) => {
                            const columns = rawColumns.filter((col) => col.Field !== 'del');
                            console.log(`Columns for ${tableName}:`, columns);

                            const primaryKeys = columns.filter((column) => column.Key === 'PRI');
                            const nonPrimaryColumns = columns.filter((col) => col.Key !== 'PRI' && col.Field !== 'del');
                            const selectSqlKeys = `SELECT ${primaryKeys.length > 0 ? primaryKeys.map((pk) => pk.Field).join('\n, ') : '*'} 
                                                     FROM ${tableName} 
                                                    WHERE del = 'N';`;
                            const selectSqlList = `SELECT ${columns.map((col) => col.Field).join('\n, ')}     
                                                 FROM ${tableName} 
                                                WHERE del = 'N' ;`;
                            const selectSqlOne = `SELECT ${columns.map((col) => col.Field).join('\n, ')}   
                                                    FROM ${tableName} 
                                                   WHERE ${primaryKeys.length > 0 ? primaryKeys.map((pk) => `${pk.Field} = ?`).join('\n AND ') : 'id = ?'};`;
                            const insertSqlOne = `INSERT INTO ${tableName} (${columns.map((col) => col.Field).join('\n, ')}) 
                                                       VALUES (${columns.map(() => '?').join('\n, ')});`;
                            const updateSqlOne = `UPDATE ${tableName} 
                                                     SET ${nonPrimaryColumns.map((col) => `${col.Field} = ?`).join('\n, ')} 
                                                   WHERE ${primaryKeys.length > 0 ? primaryKeys.map((pk) => `${pk.Field} = ?`).join('\n AND ') : 'id = ?'};`;
                            const deleteSqlOne = `UPDATE ${tableName} 
                                                     SET del = 'Y'
                                                   WHERE ${primaryKeys.length > 0 ? primaryKeys.map((pk) => `${pk.Field} = ?`).join('\n AND ') : 'id = ?'};`;

                            console.log('Generated SQL Statements:', { selectSqlKeys, selectSqlList, selectSqlOne, insertSqlOne, updateSqlOne, deleteSqlOne });

                            if (!fs.existsSync(rtInfoDir)) {
                                fs.mkdirSync(rtInfoDir);
                            }

                            fs.writeFileSync(filePath, '');
                            fs.appendFileSync(filePath, `const tableInfo = {\n`);
                            fs.appendFileSync(filePath, `    tableName: '${tableName}',\n`);
                            fs.appendFileSync(filePath, `    fields: {\n`);
                            columns.forEach((col) => {
                                const size = extractNumber(col.Type);
                                fs.appendFileSync(filePath, `        ${col.Field}: { pk: ${col.Key === 'PRI'}, maxLength: ${size} },\n`);
                            });
                            fs.appendFileSync(filePath, `    },\n`);
                            fs.appendFileSync(filePath, `    selectSqlKeys: \`${selectSqlKeys}\`,\n`);
                            fs.appendFileSync(filePath, `    selectSqlList: \`${selectSqlList}\`,\n`);
                            fs.appendFileSync(filePath, `    selectSqlOne: \`${selectSqlOne}\`,\n`);
                            fs.appendFileSync(filePath, `    insertSqlOne: \`${insertSqlOne}\`,\n`);
                            fs.appendFileSync(filePath, `    updateSqlOne: \`${updateSqlOne}\`,\n`);
                            fs.appendFileSync(filePath, `    deleteSqlOne: \`${deleteSqlOne}\`,\n`);
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
                    seccess : false, 
                    message : 'sql에 에러 발생',
                    sql     : `SHOW COLUMNS FROM []`, 
                    error
                })        
            });
    }
};

module.exports = pool







 /**



// 이 코드는 Node.js 환경에서 MySQL 데이터베이스와 연결하여 여러 쿼리를 체이닝 방식으로 실행하는 예제입니다
const mysql = require('mysql2/promise');

async function runQueries() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'user',
      password: 'password',
      database: 'testdb'
    });

    await connection.execute('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))')
      .then(() => connection.execute('INSERT INTO users (name) VALUES (?)', ['John Doe']))
      .then(() => connection.execute('INSERT INTO users (name) VALUES (?)', ['Jane Doe']))
      .then(() => connection.query('SELECT * FROM users'))
      .then(([rows]) => {
        console.log('Users:');
        console.log(rows);
      })
      .then(() => connection.execute('UPDATE users SET name = ? WHERE id = ?', ['John Smith', 1]))
      .then(() => connection.query('SELECT * FROM users WHERE id = ?', [1]))
      .then(([rows]) => {
        console.log('Updated user:');
        console.log(rows[0]);
      })
      .then(() => connection.execute('DELETE FROM users WHERE id = ?', [2]))
      .then(() => connection.query('SELECT COUNT(*) as count FROM users'))
      .then(([rows]) => {
        console.log('Remaining users count:');
        console.log(rows[0].count);
      });

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

runQueries();

             * 
             */