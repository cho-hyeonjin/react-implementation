// 2. HTML tag를 객체로 바꿔서 리턴해보자. --- (다루기 쉬운 포맷을 다시 다루기 까다로운 포맷으로)
function createDOM(node) {
  // document.creatElement API를 이용하되 태그명에 해당하는 문자열을 HTML을 표현한 객체에서 notation으로 끌어온다.
  const element = document.createElement(node.tag); // === document.createElement('p')

  return element;
}

// 1. HTML tag를 객체로 바꿔서 표현해보자. --- (다루기 까다로운 포맷을 다루기 쉬운 포맷으로)
const virtualDOM = {
  tag: "p",
  props: {},
  children: [
    // 자식 요소는 여러 개일 수 있으니까 배열로 만들되, 일단 1개의 태그(객체)만 만들어보자.
    {
      tag: "h1",
      props: {},
      children: ["React Implementation🧞‍♂️"],
    },
  ],
};

// createDOM 함수는 virtualDOM 겍체를 전달 받아서 DOM API로 element --- (개발자는 이렇게 만들어져 있는 함수를 이용하기만 하면 되는 것!)
createDOM(virtualDOM);
