/* Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
1.Датой.
2.Адресом электронной почты. */
export function dataSeparator() {
  const input = prompt("enter text");
  const regexpDate = /[0-9]{2}.[0-9]{2}.[0-9]{4}/g;
  const regexpEmail = /[a-zA-Z_\-.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

  if (regexpDate.test(input)) {
    alert("this is Date");
  } else if (regexpEmail.test(input)) {
    alert("This is email");
  } else {
    alert("input invalid");
  }
}
