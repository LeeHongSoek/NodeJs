const pageInfo = require('./page')

pageInfo.totalRow = 122
pageInfo.rowPerPage = 10
pageInfo.pagePerBlock = 7
pageInfo.currPage = 13
pageInfo.currBlock = 1

console.log('pageInfo.totalRow : ',pageInfo.totalRow)
console.log('pageInfo.lastPage : ',pageInfo.lastPage)
console.log('pageInfo.lastBlock : ',pageInfo.lastBlock)
console.log('pageInfo.currPage : ',pageInfo.currPage)
console.log('pageInfo.currBlock : ',pageInfo.currBlock)
console.log('pageInfo.limtFrom : ',pageInfo.limitFrom)
console.log('pageInfo.limtTo : ',pageInfo.limitTo)

console.log('pageInfo.nextPage : ',pageInfo.nextPage)

var pagLst = pageInfo.currPagelist
var strPge = ''
for(i in pagLst){
    strPge += ', '
    strPge += (pageInfo.currPage===pagLst[i]) ? '['+pagLst[i]+']' : pagLst[i] 
}
console.log('pageInfo.currPagelist() : ',strPge.substring(2, strPge.length))
