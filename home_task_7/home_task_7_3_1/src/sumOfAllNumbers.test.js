import { sumOfAllNumbers } from "./sumOfAllNumbers";

describe(sumOfAllNumbers, () => {
  test("Should counts sum of all the whole numbers from 1 to 3", () => {
    jest.spyOn(console, "log");
    sumOfAllNumbers(1, 3);
    expect(console.log).toBeCalledWith(6);
  });
  test("Should counts sum of all the whole numbers from 50  to 100", () => {
    jest.spyOn(console, "log");
    sumOfAllNumbers(50, 100);
    expect(console.log).toBeCalledWith(3825);
  });
});
