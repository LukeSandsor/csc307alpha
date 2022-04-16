const myFunctions = require('./sample_functions.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing sum -- failure', () => {
  const target = 30;
  const result = myFunctions.sum(12, 12);
  expect(target).not.toBe(result);
});

test('Testing div -- success', () => {
  const target = 1;
  const result = myFunctions.div(12, 12);
  expect(target).toBe(result);
});

test('Testing sum -- failure', () => {
  const target = 2;
  const result = myFunctions.div(12, 12);
  expect(target).not.toBe(result);
});

test('Testing div -- error throw', () => {

    expect(() => myFunctions.div(12,0)).toThrow(/Divide by zero error/);
});

test('Testing containsNumber -- success', () => {
  const result = myFunctions.containsNumbers('iohvaefhv1iuaw');
  expect(result).toBeTruthy();
});

test('Testing containsNumber -- failure', () => {
  const result = myFunctions.containsNumbers('awdawdawd');
  expect(result).toBeFalsy();
});

test('Testing sum -- success special 1', () => {
  const result = myFunctions.containsNumbers('awd   awd');
  expect(result).toBeTruthy();
});

test('Testing sum -- success special 2', () => {
  const result = myFunctions.containsNumbers('符号（ふごう）とは。事物の検索・指示のためにつけておく、簡単な文字や図形。しるし。');
  expect(result).toBeFalsy;
});

test('Testing sum -- failure special 2', () => {
  const result = myFunctions.containsNumbers('\0');
  expect(result).toBeFalsy();
});

test('Testing sum -- failure special 3', () => {
  const result = myFunctions.containsNumbers('§A·VðräóBÁ‚');
  expect(result).toBeFalsy();
});