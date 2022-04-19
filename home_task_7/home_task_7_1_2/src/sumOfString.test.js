import { sumOfString } from "./sumOfString";

describe(sumOfString, () => {
  test("sum of length words: hello + world to be equal 10", () => {
    jest.spyOn(console, "log");
    sumOfString("hello", "world");
    expect(console.log).toBeCalledWith(10);
  });
  test("sum of length words: hi + there to be equal 7", () => {
    jest.spyOn(console, "log");
    sumOfString("hi", "there");
    expect(console.log).toBeCalledWith(7);
  });
  test("sum of length words: no + war not to be equal 9", () => {
    jest.spyOn(console, "log");
    sumOfString("no", "war");
    expect(console.log).not.toBeCalledWith(9);
  });
});
