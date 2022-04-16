const StockFile = require('./stock-portfolio.js');

test('Testing stock portfolio empty on creation -- success', () => {
    const portfolio = new StockFile.Portfolio();
    expect(portfolio.stocks === 0).toBeTruthy();
});

test('Testing stock portfolio isEmpty -- success', () => {
    const portfolio = new StockFile.Portfolio();
    expect(portfolio.isEmpty()).toBeTruthy();
});
