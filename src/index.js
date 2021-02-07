import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];
const fruits2 = ["Apple", ...citrus, "Banana", "Coconut"];
console.log(fruits);
console.log(fruits2);

const fullName = { fName: "James", lName: "Bond" };

const user = {
  ...fullName,
  id: 1,
  username:"jamesbond007"
}

console.log(user);

const user2 = {
  fullName,
  id: 1,
  username:"jamesbond007"
}

console.log(user2);