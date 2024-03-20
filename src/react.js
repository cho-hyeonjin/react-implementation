export function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  node.children.map(createDOM).forEach(element.appendChild.bind(element)); // 컨텍스트가 깨지기 때문에 bind로 묶어서 고정해준 것!

  return element;
}

// element 생성 함수 - children 자료형 반영 위해 가변 인자 사용 코드로 변경
export function createElement(tag, props, ...children) {
  return {
    tag,
    props,
    children,
  };
}

export function render(virtualDOM, container) {
  container.appendChild(createDOM(virtualDOM));
}
