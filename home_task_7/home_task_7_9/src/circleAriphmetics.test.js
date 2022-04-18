import {
  triangleChecking,
  getCircleLengthAndSquare,
} from "./circleAriphmetics";

describe("triangleChecking", () => {
  test("indicate what triangle is rectangular by giving length of sides", () => {
    expect(triangleChecking(3, 4, 5)).toBeTruthy();
    expect(triangleChecking(26, 24, 10)).toBeTruthy();
    expect(triangleChecking(13, 11, 9)).toBeFalsy();
  });
});
describe("getCircleLengthAndSquare", () => {
  test("show length and square of circle by giving radius", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "5");
    jest.spyOn(console, "log");
    getCircleLengthAndSquare();
    expect(console.log).toBeCalledWith(31, 157);
  });
});
