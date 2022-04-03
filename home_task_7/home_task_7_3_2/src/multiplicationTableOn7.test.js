import { multiplicationTableOn7 } from "./multiplicationTableOn7";

describe(multiplicationTableOn7, () => {
  test("show multiplication table on 7 * 1", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(7);
    expect(console.log).toBeCalledWith(14);
    expect(console.log).toBeCalledWith(63);
  });
});
