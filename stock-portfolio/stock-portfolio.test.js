const StockFile = require('./stock-portfolio.js');

test('Testing stock portfolio empty on creation -- success', () => {
    const portfolio = new StockFile.Portfolio();
    expect(portfolio.stocks === 0).toBeTruthy();
});

test('Testing stock portfolio isEmpty -- success', () => {
    const portfolio = new StockFile.Portfolio();
    expect(portfolio.isEmpty()).toBeTruthy();
});

test('Unique Stocks Nums -- success', () => {
    const target = 3;
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('GME', 5);
    portfolio.addStock('ANET', 3);
    portfolio.addStock('VSAT', 3);
    const result = portfolio.numUniqueStocks();
    expect(result).toBe(target);
});

test('Unique Stocks Nums with Duplicate -- success', () => {
    const target = 2;
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('GME', 5);
    portfolio.addStock('ANET', 3);
    portfolio.addStock('GME', 3);
    const result = portfolio.numUniqueStocks();
    expect(result).toBe(target);
});

test('Unique Stocks Nums with Duplicate -- success', () => {
    const target = 2;
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('GME', 5);
    portfolio.addStock('ANET', 3);
    portfolio.addStock('GME', 3);
    const result = portfolio.numUniqueStocks();
    expect(result).toBe(target);
});

test('Purchase Stocks Results -- success', () => {
    const target = 5;
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('GME', 5);
    const result = portfolio.getShares('GME');
    expect(result).toBe(target);
});

test('Purchase Stocks Duplicate  -- success', () => {
    const target = 15;
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('GME', 5);
    portfolio.addStock('GME', 10)
    const result = portfolio.getShares('GME');
    expect(result).toBe(target);
});

test('Sell Stocks Resuts  -- success', () => {
    const target = 1;
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('CHDN', 5);
    portfolio.removeStock('CHDN', 4);
    const result = portfolio.getShares('CHDN');
    expect(result).toBe(target);
});

test('Check shares of unowned stock -- success', () => {
    const target = 0;
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('ANET', 10);
    const result = portfolio.getShares('CHDN');
    expect(result).toBe(target);
});

test('Sell Too Many Shares -- error throw', () => {
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('FMC', 100)
    expect(() => portfolio.removeStock('FMC', 101)).toThrow(/ShareSaleException/);
});

test('Sell unowned stock -- error throw', () => {
    const portfolio = new StockFile.Portfolio();
    portfolio.addStock('MIND', 100)
    expect(() => portfolio.removeStock('CVX')).toThrow(/StockNotFoundException/);
});