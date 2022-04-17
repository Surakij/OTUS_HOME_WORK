import { smartMarkup } from "./addParagraph";

describe("smartMarkup", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    smartMarkup(el);
  });

  function inputValue(text) {
    el.querySelector("input").value = text;
    el.querySelector("button").click();
  }

  test("is a function", () => {
    expect(smartMarkup).toBeInstanceOf(Function);
  });

  test("create input & button & div class .list ", () => {
    expect(el.querySelector("div.list")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelectorAll("p").length).toBe(3);
  });
  test("add new p element by button click", () => {
    const value = "text4";
    inputValue(value);
    expect(el.querySelectorAll("p").length).toBe(4);
    expect(el.querySelectorAll("p")[3].innerText).toBe(value);
  });
  test("remove first paragraph when it over 5 in the list", () => {
    const textValue = ["text4", "text5", "text6", "text7"];
    for (let i = 0; i < textValue.length; i++) {
      inputValue(textValue[i]);
    }
    expect(el.querySelectorAll("p").length).toBe(5);
  });
});
