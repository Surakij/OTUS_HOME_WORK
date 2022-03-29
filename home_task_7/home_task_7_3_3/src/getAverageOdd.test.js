import { getAverageOdd } from "./getAverageOdd";

describe(getAverageOdd, () => {
  test("Should return sum of average all odd numbers 5", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "5");
    jest.spyOn(console, "log");
    getAverageOdd();
    expect(console.log).toBeCalledWith(3);
  });
  test("Should return sum of average all odd numbers 10", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "10");
    jest.spyOn(console, "log");
    getAverageOdd();
    expect(console.log).toBeCalledWith(5);
  });
  test("Should return sum of average all odd numbers 11", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "11");
    jest.spyOn(console, "log");
    getAverageOdd();
    expect(console.log).toBeCalledWith(6);
  });
});
