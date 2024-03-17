import { createDOM } from "./react";

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
          props: {},
          children: ["아이템1"],
        },
        {
          tag: "li",
          props: {},
          children: ["아이템2"],
        },
        {
          tag: "li",
          props: {},
          children: ["아이템3"],
        },
      ],
    },
  ],
};

// 3. UI에 심어주자.
document.querySelector("#root").appendChild(createDOM(virtualDOM));
