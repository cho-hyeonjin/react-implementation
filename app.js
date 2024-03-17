// 2. HTML tag를 객체로 바꿔서 리턴해보자. --- (다루기 쉬운 포맷을 다시 다루기 까다로운 포맷으로)
function createDOM(node) {
  // 5. 문자열이면 문자열 DOM을 만들어서 리턴하도록 예외처리
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // 2-1. document.creatElement API를 이용하되 태그명에 해당하는 문자열을 HTML을 표현한 객체에서 notation으로 끌어온다.
  const element = document.createElement(node.tag);

  // 4-2. 재귀 패턴으로 createDOM 함수를 호출하여 element의 자식요소 붙이기
  node.children.map(createDOM).forEach(element.appendChild.bind(element)); // 컨텍스트가 깨지기 때문에 bind로 묶어서 고정해준 것!

  // 2-2. HTML element 리턴
  return element;
}

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
