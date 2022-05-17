const app = require('../lec_07_app')

// EXPRESS 서버구동
const port = 3000
const server = app.listen(3000, () => console.log(`Example app listening on port ${port}`) )

var readline = require('readline'); 
var r = readline.createInterface({ input:process.stdin, output:process.stdout }); 
r.question("종료를 하려면 Return키를 누르시요\n", function(answer) { 
    console.log("서버 종료!", answer); 
    r.close() // 반드시 close()를 해줘야 합니다. 
    server.close();
    process.exit();
});
