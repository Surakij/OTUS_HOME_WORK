import {getBiggestNumber} from './getBiggestNumber';

test('Should shows biggest of two values', () => {
    expect(getBiggestNumber(1, 2)).toBe(2)
});
test('Should shows biggest of two values', () => {
    expect(getBiggestNumber(9, 1)).toBe(9)
});
test('Should shows biggest of two values', () => {
    expect(getBiggestNumber(-5, 5)).toBe(5)
});
