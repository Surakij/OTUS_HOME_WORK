import { sum } from "./sum";

describe("sum function", () => {
  test("sum of 1 + 2 to equal 3", () => {
    jest.spyOn(console, "log");
    sum(1, 2);
    expect(console.log).toBeCalledWith(3);
  });
  test("sum 5 + 3 to equal 8", () => {
    jest.spyOn(console, "log");
    sum(5, 3);
    expect(console.log).toBeCalledWith(8);
  });
  test("sum of -15 -3 to equal -18", () => {
    jest.spyOn(console, "log");
    sum(-15, -3);
    expect(console.log).toBeCalledWith(-18);
  });
});
