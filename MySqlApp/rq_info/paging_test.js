const pageInfo = require('./iPageInfo')

pageInfo.totalRow = 122
pageInfo.rowPerPage = 10
pageInfo.pagePerBlock = 7
pageInfo.currPage = 13
pageInfo.currBlock = 1


console.log('pageinfo.totalRow: ',       pageinfo.totalRow)
console.log('pageinfo.rowPerPage: ',     pageinfo.rowPerPage)
console.log('pageinfo.pagePerBlock: ',   pageinfo.pagePerBlock)
console.log('pageinfo.currPage: ',       pageinfo.currPage)
console.log('pageinfo.lastPage: ',       pageinfo.lastPage)
console.log('pageinfo.currBlock: ',      pageinfo.currBlock)
console.log('pageinfo.limitFrom: ',      pageinfo.limitFrom)
console.log('pageinfo.startBlockPage: ', pageinfo.startBlockPage)
console.log('pageinfo.prevBlockPage: ',  pageinfo.prevBlockPage)
console.log('pageinfo.prevPage: ',       pageinfo.prevPage)
console.log('pageinfo.currPagelist: ',   pageinfo.currPagelist)
console.log('pageinfo.nextPage: ',       pageinfo.nextPage)
console.log('pageinfo.nextBlockPage: ',  pageinfo.nextBlockPage)
console.log('pageinfo.endBlockPage: ',   pageinfo.endBlockPage)


var pagLst = pageInfo.currPagelist
var strPge = ''
for(i in pagLst){
    strPge += ', '
    strPge += (pageInfo.currPage===pagLst[i]) ? '['+pagLst[i]+']' : pagLst[i] 
}
console.log('pageInfo.currPagelist() : ',strPge.substring(2, strPge.length))
