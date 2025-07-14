export function plunk(collection, key) {
  return collection.map((item) => item[key]);
}

const users = [
  { name: "AAA", age: 10 },
  { name: "VV", age: 20 },
  { name: "CCC", age: 30 },
];

console.log(plunk(users, "name"));
