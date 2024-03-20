import { createDOM, render } from "./react";
import { createElement } from "./react";

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
