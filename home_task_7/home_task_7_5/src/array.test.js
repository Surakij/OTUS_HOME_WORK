import {
  getArray,
  getSumArr,
  getDoubleArray,
  getMaxAndMinValueArr,
} from "./array";

describe("getArray function", () => {
  test("should create new arr with values from 0 to 9", () => {
    expect(getArray()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
describe("getSumArr function", () => {
  test("should count sum of all values of arr", () => {
    jest.spyOn(console, "log");
    getSumArr(getArray());
    expect(console.log).toHaveBeenCalledWith(45);
  });
});
describe("getDoubleArray", () => {
  test("should multiple values of arr twice", () => {
    expect(getDoubleArray(getArray())).toEqual([
      0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
    ]);
  });
});

describe("getMaxAndMinValueArr function", () => {
  test("should find min and max value of arr", () => {
    jest.spyOn(console, "log");
    getMaxAndMinValueArr(getDoubleArray(getArray()));
    expect(console.log).toHaveBeenCalledWith(0, 18);
  });
});
