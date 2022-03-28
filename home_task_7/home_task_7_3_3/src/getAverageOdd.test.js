import {getAverageOdd} from './getAverageOdd';

test('Should return sum of average all odd numbers', ()=>{
    expect(getAverageOdd(5)).toBe(3);
});
test('Should return sum of average all odd numbers', ()=>{
    expect(getAverageOdd(10)).toBe(5);
});
test('Should return sum of average all odd numbers', ()=>{
    expect(getAverageOdd(11)).toBe(6);
});