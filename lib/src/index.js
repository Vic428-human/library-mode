export function plunk(collection, key) {
  return collection.map((item) => item[key]);
}
