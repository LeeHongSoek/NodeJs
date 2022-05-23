//

var readline = require('readline')
var r = readline.createInterface({ input:process.stdin, output:process.stdout }) 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("프로그램 종료!", answer) 
    server.close()
    r.close() // 반드시 close()를 해줘야 합니다. 
    process.exit()
})

//

const express = require('express') // npm install express ---save
const app = express()


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port 

    console.log('Server is working : HOST/PORT - ',host,'/',port,'\n')
})

app.get('/', function (req, res) {
    res.send('실행 express.js')
})

