export function smartMarkup(el) {
  // let body = document.body;
  // let el = document.createElement('div');
  // body.append(el)
  // creat div list & add to wrapper
  const divInner = document.createElement("div");
  divInner.classList.add("list");
  el.prepend(divInner);

  // creat button
  const button = document.createElement("button");
  button.innerText = "Add";
  button.hidden = true;
  el.prepend(button);

  // create input type = text
  const input = document.createElement("input");
  input.type = "text";
  el.prepend(input);

  // create el p and insert into .list
  divInner.innerHTML = `
     <p>text1</p>
     <p>text2</p>
     <p>text3</p>
`;

  // code

  input.addEventListener("click", showButton);
  button.addEventListener("click", addElementToList);

  // функция вызова кнопки - выводит кнопку из hidden
  function showButton() {
    button.hidden = false;
  }

  // по клику кнопки будет выполняться:

  function addElementToList() {
    // проверка на колво эл p и удаление первого эл
    const listItems = divInner.querySelectorAll("p");

    if (listItems.length > 4) {
      divInner.firstElementChild.remove();
    }

    // создаем новый элемент и записываем в него значение из поля ввода
    const listItem = document.createElement("p");
    // забираем текст из поля ввода
    listItem.innerText = input.value;
    // обращаюсь в DIV  и добавляем в него новый элемент
    divInner.append(listItem);
    // очистка поля ввода
    input.value = "";
    button.hidden = true;
  }
}
