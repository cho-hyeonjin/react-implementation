import { createDOM, render } from "./react";

// 1. HTML tag를 객체로 바꿔서 표현해보자. --- (다루기 까다로운 포맷을 다루기 쉬운 포맷으로)
const virtualDOM = {
  tag: "p",
  props: {},
  // 4-1. 자식 요소도 렌더링 해주어야 한다!
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

// 사용하는 쪽에서는 아래에서처럼 render라는 함수에 virtualDOM 이랑 container 역할 하는 요소만 넘겨주면 되는구나~ 하고 사용
render(virtualDOM, document.querySelector("#root"));
