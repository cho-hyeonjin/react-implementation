import { createDOM, render } from "./react";
import { createElement } from "./react";

// 하드 코딩으로 만드는 VirtualDOM
const virtualDOM = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["React Implementation🧞‍♂️"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: { style: "color: salmon" },
          children: ["아이템1"],
        },
        {
          tag: "li",
          props: { style: "color: skyblue" },
          children: ["아이템2"],
        },
        {
          tag: "li",
          props: { style: "color: tan" },
          children: ["아이템3"],
        },
      ],
    },
  ],
};

render(virtualDOM, document.querySelector("#root"));

// createElement 함수로 만드는 VirtualDOM
const virtualDOM2 = createElement(
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

console.log(virtualDOM2);
render(virtualDOM2, document.querySelector("#root"));
