export function getUser() {
  const user = {
    name: "John",
  };
  return user;
}

export function addAge(obj) {
  const user = obj;
  user.age = +prompt("Enter your age: ");
  return user;
}

export function cloneObject(obj) {
  const admin = { ...obj, role: "admin" };
  return admin;
}

export function objDestructuring(obj) {
  const { name, age, role } = obj;
  console.log(name, age, role);
}
