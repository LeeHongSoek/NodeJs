const path = require('path')
require('dotenv').config({path : path.join(__dirname, 'config_local.env')})
//require('dotenv').config({path : path.join(__dirname, 'config_remote.env')})

const connection = {
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    port            : process.env.DB_PORT,
    database        : process.env.DB_DATABASE,
    connectionLimit : 30
}

pool = require('mysql').createPool(connection) // npm install -S mysql
pool.isConnected = false
pool.chkConnection = function () {
    pool.getConnection((err, connection) => {
        if(err) {
            console.log(`MySql 데이터베이스 접속이 실패되었습니다 : ${err}`)            
            pool.isConnected = false
        }
        else {
            console.log('MySql 데이터베이스에 정상적으로 접속되었습니다.')
            pool.isConnected = true 
    
            connection.release()
        }    
    })
}

module.exports = pool