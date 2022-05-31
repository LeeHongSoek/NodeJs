const pageInfo = require('./common')

pageInfo.totalRow = 120
pageInfo.rowPerPage = 10
pageInfo.pagePerBlock = 7
pageInfo.currPage = 5
pageInfo.currBlock = 1

console.log('pageInfo.totalRow : ',pageInfo.totalRow)
console.log('pageInfo.totalPages : ',pageInfo.totalPages)
console.log('pageInfo.totalBlock : ',pageInfo.totalBlock)
console.log('pageInfo.currPage : ',pageInfo.currPage)
console.log('pageInfo.currBlock : ',pageInfo.currBlock)
console.log('pageInfo.limtFrom : ',pageInfo.limitFrom)
console.log('pageInfo.limtTo : ',pageInfo.limitTo)

var pagLst = pageInfo.getcurrPagelist()
var strPge = ''
for(i in pagLst){
    strPge += ', '
    strPge += (pageInfo.currPage===pagLst[i]) ? '['+pagLst[i]+']' : pagLst[i] 
}
console.log('pageInfo.currPagelist() : ',strPge.substring(2, strPge.length))
