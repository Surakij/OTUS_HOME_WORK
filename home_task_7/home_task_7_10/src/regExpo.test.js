import { dataSeparator } from "./regExpo";

describe("dataSeparator", () => {
  test('show "this is Date" by giving any number xx.xx.xxxx', () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "18.08.2014");
    jest.spyOn(window, "alert").mockImplementationOnce(() => {});
    dataSeparator();
    expect(window.alert).toBeCalledWith("this is Date");
  });
  test('show "this is email" by giving any email address', () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementationOnce(() => "hello@world.com");
    jest.spyOn(window, "alert").mockImplementationOnce(() => "This is email");
    dataSeparator();
    expect(window.alert).toBeCalledWith("This is email");
  });
  test('show "input invalid" if data unknown', () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "@world.com");
    jest.spyOn(window, "alert").mockImplementationOnce(() => "input invalid");
    dataSeparator();
    expect(window.alert).toBeCalledWith("input invalid");
  });
});
