import { createDOM, render } from "./react";
import { createElement } from "./react";

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

const virtualDOM2 = createElement(
  "p",
  {},
  createElement("h1", {}, "React Implementation")
);
render(virtualDOM, document.querySelector("#root"));
