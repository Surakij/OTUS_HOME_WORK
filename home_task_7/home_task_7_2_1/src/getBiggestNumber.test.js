import { getBiggestNumber } from "./getBiggestNumber";

describe(getBiggestNumber, () => {
  test("Should shows biggest of two values 1 and 2", () => {
    jest.spyOn(console, "log");
    getBiggestNumber(1, 2);
    expect(console.log).toBeCalledWith(2);
  });
  test("Should shows biggest of two values 9 and 3", () => {
    jest.spyOn(console, "log");
    getBiggestNumber(9, 3);
    expect(console.log).toBeCalledWith(9);
  });
  test("Should shows biggest of two values 0 and 1", () => {
    jest.spyOn(console, "log");
    getBiggestNumber(-10, 101);
    expect(console.log).toBeCalledWith(101);
  });
});
