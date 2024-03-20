/* @jsx createElement */
import { createDOM, createElement, render } from "./react";

// createElement 함수로 만드는 VirtualDOM
const virtualDOM = createElement(
  "p",
  {},
  createElement("h1", {}, "React Implementation"),
  createElement(
    "ul",
    {},
    createElement("li", { style: "color: red" }, "아이템1"),
    createElement("li", { style: "color: blue" }, "아이템2"),
    createElement("li", { style: "color: green" }, "아이템3")
  )
);
render(virtualDOM, document.querySelector("#root"));

const virtualDOM2 = (
  <p>
    <h1>React Implementation</h1>
    <ul>
      <li style="color: red">아이템1</li>
      <li style="color: blue">아이템2</li>
      <li style="color: green">아이템3</li>
    </ul>
  </p>
);

console.log(virtualDOM2);

render(virtualDOM2, document.querySelector("#root"));
