export function addAge() {
  const user = {
    name: "John",
  };
  user.age = +prompt("Enter your age: ");
  return user;
}
