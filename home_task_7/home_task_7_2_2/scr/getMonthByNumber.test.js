const getMonthByNumber = require('./getMonthByNumber');

test('Should show a month by giving number', () => {
   expect(getMonthByNumber(12)).toEqual('December')
});
test('Should show a month by giving number', () => {
    expect(getMonthByNumber(8)).toEqual('August')
});
test('Should show a month by giving number', () => {
    expect(getMonthByNumber(3)).toEqual('March')
});