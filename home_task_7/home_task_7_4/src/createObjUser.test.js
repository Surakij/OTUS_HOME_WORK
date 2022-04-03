import {
  getUser,
  addAge,
  cloneObject,
  objDestructuring,
} from "./createObjUser";

describe("addAge function", () => {
  test("should create obj and add age", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "37");
    const user = addAge(getUser());
    expect(user.age).toEqual(37);
  });
});

describe("cloneObject function", () => {
  test("should clone initial obj and add new property role", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "37");
    const cloneUser = cloneObject(addAge(getUser()));
    expect(cloneUser).toEqual({ name: "John", age: 37, role: "admin" });
  });
});

describe("objDestructuring function", () => {
  test("should create new property with the same name and consist the same values", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "37");
    jest.spyOn(console, "log");
    objDestructuring(cloneObject(addAge(getUser())));
    expect(console.log).toBeCalledWith("John", 37, "admin");
  });
});
