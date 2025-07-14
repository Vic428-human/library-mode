// state using our library in our client application
// we have to somehow import our library into this application without acutally publishing our package in the npm registry
// now I'm going to make our lib globally available in the operating system, and npm allow us to do that by
// executing the following comment inside of that library that we have to make globally available and this
import { plunk } from "plunk";

const users = [
  { name: "AAA", age: 10 },
  { name: "VV", age: 20 },
  { name: "CCC", age: 30 },
];

console.log(plunk(users, "name"));
