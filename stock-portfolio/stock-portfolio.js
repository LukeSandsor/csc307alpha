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
    numUniqueStocks() {
        return this.stocks;
    }
    addStock(stock, sharesAdded) {
        const index = this.stockList.findIndex(element => (element.ticker === stock));
        if(index === -1){
            this.stockList.push(new Stock(stock,sharesAdded));
            this.stocks+= 1;
        }
        else{
            this.stockList[index].shares+= sharesAdded;
        }
    }
    removeStock(stock, sharesRemoved) {
        const index = this.stockList.findIndex(element => (element.ticker === stock));
        if(index !== -1){
            if(this.stockList[index].shares < sharesRemoved)
                throw("ShareSaleException");
            this.stockList[index].shares-= sharesRemoved;
            if(this.stockList[index].shares === 0)
                this.stockList.splice(index, 1);
        }
        else{
            throw("StockNotFoundException");
        }
    }
    getShares(stock) {
        const index = this.stockList.findIndex(element => (element.ticker === stock));
        if(index !== -1)
            return this.stockList[index].shares;
        return 0;
    }

}


module.exports = {
    Portfolio: Portfolio,
    Stock: Stock
}
