import { getMonthByNumber } from "./getMonthByNumber";

describe(getMonthByNumber, () => {
  test("Should show January by giving number 1", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "1");
    jest.spyOn(console, "log");
    getMonthByNumber();
    expect(console.log).toBeCalledWith("January");
  });
  test("Should show August by giving number 8", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "8");
    jest.spyOn(console, "log");
    getMonthByNumber();
    expect(console.log).toBeCalledWith("August");
  });
  test("Should show March by giving number 3", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "3");
    jest.spyOn(console, "log");
    getMonthByNumber();
    expect(console.log).toBeCalledWith("March");
  });
});
