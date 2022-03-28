import getSumOfNumber from './getSumOfNumber';


test('Should get sum of all numbers in number 123', () => {
    expect(getSumOfNumber(123)).toBe(6)
});
test('Should get sum of all numbers in number 3698', () => {
    expect(getSumOfNumber(3698)).toBe(26)
});
test('Should get sum of all numbers in number 5587', () => {
    expect(getSumOfNumber(5587)).not.toBe(20)
});