import { getDayOfWeek, minCount, olderBro } from "./dateChecking";

describe("getDayOfWeek function", () => {
  test("should show the day of week by giving date xx.xx.xxxx", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "10.01.1985");
    expect(getDayOfWeek()).toBe("Thursday");
  });
});

describe("minCount", () => {
  test("should show console with min from beginning of the day", () => {
    const date = new Date();
    const min = date.getMinutes();
    jest.spyOn(console, "log");
    minCount();
    expect(console.log).toBeCalledWith(min);
  });
});
describe("olderBro", () => {
  test("should show how is older", () => {
    const user1 = "10.01.1985";
    const user2 = "01.01.1985";
    expect(olderBro(user1, user2)).toBe(user2);
  });
  test("should show how is older", () => {
    const user1 = "01.05.1983";
    const user2 = "01.01.1985";
    expect(olderBro(user1, user2)).toBe(user1);
  });
});
