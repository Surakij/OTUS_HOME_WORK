import { diff, isWord, pow } from "./functions";

describe("diff func", () => {
  test("should find expression difference from biggest num", () => {
    expect(diff(7, 9)).toEqual(2);
  });
  test("should find expression difference from biggest num", () => {
    expect(diff(3, -2)).toEqual(1);
  });
  test("should find expression difference from biggest num", () => {
    expect(diff(-2, -5)).toEqual(3);
  });
});

describe("isWord function", () => {
  test("should return true if str contain one word", () => {
    expect(isWord("hello")).toBeTruthy();
  });
  test("should return true if str contain one word", () => {
    expect(isWord("hello world")).toBeFalsy();
  });
});

describe("pow func", () => {
  test("should exponentiation of a number", () => {
    expect(pow(7, 2)).toEqual(49);
  });
  test("should exponentiation of a number", () => {
    expect(pow(6, 2)).toEqual(36);
  });
});
