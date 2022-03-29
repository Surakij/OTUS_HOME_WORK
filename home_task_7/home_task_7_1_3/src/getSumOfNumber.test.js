import { getSumOfNumber } from "./getSumOfNumber";

describe(getSumOfNumber, () => {
  test("Should get sum of all numbers in number 123", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "123");
    jest.spyOn(console, "log");
    getSumOfNumber();
    expect(console.log).toBeCalledWith(6);
  });
  test("Should get sum of all numbers in number 589", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "589");
    jest.spyOn(console, "log");
    getSumOfNumber();
    expect(console.log).toBeCalledWith(22);
  });
  test("Should get sum of all numbers in number 999", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "999");
    jest.spyOn(console, "log");
    getSumOfNumber();
    expect(console.log).toBeCalledWith(27);
  });
});
