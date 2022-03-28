import {hasCircleFitSquare} from'./circleInSquare';

test('shows if the square contain the circle', ()=> {
    expect(hasCircleFitSquare(50, 50)).toEqual(false)
});
test('shows if the square contain the circle', ()=> {
    expect(hasCircleFitSquare(5, 30)).toEqual(true)
});
