const page_info = require('./common')

page_info.totalrow = 1220
page_info.rowperpage = 10
page_info.currpage = 121
page_info.currblock = 1

console.log('page_info.totalrow -> ',page_info.totalrow)

console.log('page_info.limtfrom() -> ',page_info.getlimitfrom())
console.log('page_info.limtto -> ',page_info.rowperpage)

console.log('page_info.gettotalpages() -> ',page_info.gettotalpages())
console.log('page_info.getcurrpage() -> ',page_info.getcurrpage())
console.log('page_info.getcurrblock() -> ',page_info.getcurrblock())

var paglst = page_info.getcurrpagelist()
console.log('page_info.currpagelist() -> ',paglst)

var pageView = ''
for(idx in paglst){
    pageView += ', '
    pageView += (page_info.getcurrpage()===paglst[idx]) ? '['+paglst[idx]+']' : paglst[idx] 
}
console.log(pageView.substring(2,pageView.length))
