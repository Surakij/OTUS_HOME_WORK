/* 1.Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате. */

// const input = prompt("Enter date as DD.MM.YYYY :");
// '10.01.1985'
export function getDayOfWeek() {
  const input = prompt("enter a date xx.xx.xxxx :");
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [day, month, year] = input.split(".");
  const inputDate = new Date(`${year}-${month}-${day}`);
  return dayOfWeek[inputDate.getDay()];
}

/* 2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня. */

export function minCount() {
  const date = new Date();
  console.log(date.getMinutes());
}

/* 3.*В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
пользователя. */
export function olderBro(us1, us2) {
  return new Date(us1) < new Date(us2) ? us1 : us2;
}
