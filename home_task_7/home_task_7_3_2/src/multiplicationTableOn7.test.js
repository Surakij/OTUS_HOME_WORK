import { multiplicationTableOn7 } from "./multiplicationTableOn7";

describe(multiplicationTableOn7, () => {
  test("show multiplication table on 7 * 1", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(7);
  });
  test("show multiplication table on 7 * 2", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(14);
  });
  test("show multiplication table on 7 * 3", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(21);
  });
  test("show multiplication table on 7 * 4", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(28);
  });
  test("show multiplication table on 7 * 5", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(35);
  });
  test("show multiplication table on 7 * 6", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(42);
  });
  test("show multiplication table on 7 * 7", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(49);
  });
  test("show multiplication table on 7 * 8", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(56);
  });
  test("show multiplication table on 7 * 9", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(63);
  });
});
