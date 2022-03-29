import { sumOfAllNumbers } from "./sumOfAllNumbers";

test("Should counts sum of all the whole numbers", () => {
  expect(sumOfAllNumbers(1, 3)).toBe(6);
});
test("Should counts sum of all the whole numbers", () => {
  expect(sumOfAllNumbers(50, 100)).toBe(3825);
});
