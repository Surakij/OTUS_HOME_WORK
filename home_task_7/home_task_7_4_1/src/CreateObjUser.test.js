import { addAge } from "./CreateObjUser";

describe("addAge function", () => {
  test("create obj and add age", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "37");
    const user = addAge();
    expect(user.age).toEqual(37);
  });
});
