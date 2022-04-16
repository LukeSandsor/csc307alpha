class Stock{
    constructor(ticker, shares = 0){
        this.ticker = ticker;
        if(shares == undefined)
            shares = 0;
        else
            this.shares = shares;
    }
}

class Portfolio{
    constructor() {
        this.stockList = [];
        this.stocks = 0;
    }
    isEmpty() {
        return this.stockList.length === 0;
    }
}


module.exports = {
    Portfolio: Portfolio,
    Stock: Stock
}
