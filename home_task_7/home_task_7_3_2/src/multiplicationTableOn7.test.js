import { multiplicationTableOn7 } from "./multiplicationTableOn7";

describe(multiplicationTableOn7, () => {
  test("show multiplication table on 7 * 1", () => {
    jest.spyOn(console, "log");
    multiplicationTableOn7();
    expect(console.log).toBeCalledWith(7);
    expect(console.log).toBeCalledWith(14);
    expect(console.log).toBeCalledWith(21);
    expect(console.log).toBeCalledWith(28);
    expect(console.log).toBeCalledWith(35);
    expect(console.log).toBeCalledWith(42);
    expect(console.log).toBeCalledWith(49);
    expect(console.log).toBeCalledWith(56);
    expect(console.log).toBeCalledWith(63);
  });
});
