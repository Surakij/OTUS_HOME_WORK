const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 5 + 3 to equal 8', () => {
    expect(sum(5, 3)).toBe(8);
});
test('adds -15 + -3 to equal -18', () => {
    expect(sum(-15, -3)).toBe(-18);
});