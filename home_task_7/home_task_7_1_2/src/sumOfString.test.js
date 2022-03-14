const sumOfString = require('./sumOfString');

test('adds hello + world equal 10', () => {
    expect(sumOfString('hello', 'world')).toBe(10)
});
test('adds hi + there equal 7', () => {
    expect(sumOfString('hi', 'there')).toBe(7)
});
test('adds no + war not to equal 9', () => {
    expect(sumOfString('no', 'war')).not.toBe(9)
});