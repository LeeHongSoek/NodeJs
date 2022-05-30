const page_info = {
    
    totalrow: -1, // 총 레코드 수

    rowperpage: 10, // 페이지당 레코드수
    pageperblock: 10, // 블럭당 페이지 수
    
    currpage: 1, // 현재 페이지
    currblock: 1, // 현재 블럭

    // mysql 의 limt 문의 첫번째 아규먼트가 들어가 수치
    getlimitfrom: function() {        
        this.currpage = this.getcurrpage()

        if ((this.currpage-1) * this.rowperpage > this.totalrow) {
            this.currpage = parseInt(this.totalrow / this.rowperpage) 
            this.currpage += (this.totalrow % this.rowperpage > 0) ? 1 : 0  // 나머지가 있으면 +1 
        }
        return (this.currpage - 1) * this.rowperpage 
    },
    // 현재 페이지를  범위 보정후 리턴한다.
    getcurrpage: function() { 
        if (this.currpage < 1) this.currpage = 1

        var totalpage = parseInt(this.totalrow / this.rowperpage)
        totalpage += (this.totalrow % this.rowperpage > 0) ? 1 : 0 
        if (totalpage < this.currpage){
            this.currpage = totalpage
        }
        return this.currpage
    },
    // 총레코드수를 기반으로 총페이지 수를 구한다.
    gettotalpages: function() {
        var totalpage = parseInt(this.totalrow / this.rowperpage)
        totalpage += (this.totalrow % this.rowperpage > 0) ? 1 : 0 

        return totalpage
    },    
    // 현재 블럭 번호를 알아 낸다
    getcurrblock: function() {
        var currpage = this.getcurrpage() 
        
        this.currblock = parseInt(currpage / this.pageperblock)
        this.currblock += (currpage % this.pageperblock > 0) ? 1 : 0 

        return this.currblock
    },
    // 현재 블럭의 페이지 수를 10개 혹은 이하로 리스팅한다.
    getcurrpagelist: function() {
        var arrypage = []

        for (var i=1; i<=this.pageperblock; i++) {
            var cntpage = ((this.getcurrblock()-1) * this.pageperblock) + i
            if (cntpage <= this.gettotalpages())
                arrypage.push(cntpage)
        }
        return arrypage;
    }
}

module.exports = page_info