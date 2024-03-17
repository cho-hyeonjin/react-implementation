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
    {
      tag: "h1",
      props: {},
      children: ["React Implementation🧞‍♂️"],
    },
  ],
};

// 3. UI에 심어주자.
document.querySelector("#root").appendChild(createDOM(virtualDOM));
