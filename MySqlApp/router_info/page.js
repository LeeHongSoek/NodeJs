const pageInfo = {
    
    // 총 레코드 수 (디폴트 없음 - 반드시 먼저 지정)
    _totalRow: -1, 
    get totalRow() {
        return this._totalRow
    },
    set totalRow(value) {
        this._totalRow = (value < 1) ? 1 : value // 반드시 1 보다 커야함.        
    },

    // 페이지당 레코드수
    _rowPerPage: 10, 
    get rowPerPage() {
        return this._rowPerPage
    },
    set rowPerPage(value) {        
        this._rowPerPage = (value < 1) ? 1 : value // 반드시 1 보다 커야함.        
    },    

    // 블럭당 페이지 수
    _pagePerBlock: 10, 
    get pagePerBlock() {
        return this._pagePerBlock        
    },
    set pagePerBlock(value) {
        this._pagePerBlock = (value < 1) ? 1 : value // 반드시 1 보다 커야함.        
        return this._pagePerBlock
    },

    // 총레코드수를 기반으로 총페이지 수를 구한다.
    _totalPage: 0,
    get totalPage() {
        var totalPage = parseInt(this._totalRow / this._rowPerPage)
        totalPage += (this._totalRow % this._rowPerPage > 0) ? 1 : 0 

        return totalPage
    },
    set totalPage(value) {
        this._totalPage = value
    },
    // 총레코드수를 기반으로 총블럭 수를 구한다.
    _totalBlock: 0,
    get totalBlock() {
        var totalBlock = parseInt(this._totalRow / (this._rowPerPage * this._pagePerBlock))
        totalBlock += (this._totalRow % (this._rowPerPage * this._pagePerBlock) > 0) ? 1 : 0 

        return totalBlock
    },
    set totalBlock(value) {
        this._totalBlock = value
    },
     
    // 현재 페이지
    _currPage: 1,     
    get currPage() { // 현재 페이지를  범위 보정후 리턴한다.
        if (this._currPage < 1) this._currPage = 1

        var totalPage = parseInt(this._totalRow / this._rowPerPage)
        totalPage += (this._totalRow % this._rowPerPage > 0) ? 1 : 0 
        if (totalPage < this._currPage){
            this._currPage = totalPage
        }
        return this._currPage
    },
    set currPage(value) {
        this._currPage = value
    },

    // 현재 블럭 번호
    _currBlock: 0,
    get currBlock() {
        this._currBlock = parseInt(this._currPage / this._pagePerBlock)
        this._currBlock += (this._currPage % this._pagePerBlock > 0) ? 1 : 0 

        return this._currBlock
    },
    set currBlock(value) {
        this._currBlock = value
    },
    
    // mysql 의 limt 문의 첫번째 아규먼트가 들어가 수치
    _limitFrom: -1,    
    get limitFrom() {       
        if ((this._currPage-1) * this._rowPerPage > this._totalRow) {
            this._currPage = parseInt(this._totalRow / this._rowPerPage) 
            this._currPage += (this._totalRow % this._rowPerPage > 0) ? 1 : 0  // 나머지가 있으면 +1 
        }
        return (this._currPage - 1) * this._rowPerPage 
    },
    set limitFrom(value) {
        this._limitFrom = value
    },

    _limitTo: -1,
    get limitTo() {
        return this._rowPerPage
    },

    _currPagelist: [],
    // 현재 블럭의 페이지 수를 10개 혹은 이하로 리스팅한다.
    get currPagelist() {
        var arrypage = []

        for (var i=1; i<=this.pagePerBlock; i++) {
            
            var page = ((this.currBlock-1) * this.pagePerBlock) + i

            if (page <= this.totalPage)
                arrypage.push(page)
        }
        return arrypage;
    },

    _prevBlockPage: 0,
    get prevBlockPage() {
        return (this.currBlock-1) * this.pagePerBlock 
    },
    _prevPage: 0,
    get prevPage() {
        return this.currPage - 1
    },
    _nextPage: 0,
    get nextPage() {
        console.log(this.currPage)
        console.log(this.totalPage)
        return (this.currPage === this.totalPage) ?0 :this.currPage + 1
    },
    _nextBlockPage: 0,
    get nextBlockPage() {
        return (this.currBlock === this.totalBlock) ?0 :this.currBlock * this.pagePerBlock + 1 
    }
}

module.exports = pageInfo