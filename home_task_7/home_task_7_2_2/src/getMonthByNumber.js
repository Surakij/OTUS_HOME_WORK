export function getMonthByNumber() {
  const number = +prompt("Enter every number from 1 to 12 to get month");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(months[number - 1]);
}
