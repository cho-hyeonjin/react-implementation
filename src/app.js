/* @jsx createElement */
import { createDOM, render } from "./react";

const virtualDOM = (
  <p>
    <h1>React Implementation</h1>
    <ul>
      <li style="color: red">아이템1</li>
      <li style="color: blue">아이템2</li>
      <li style="color: green">아이템3</li>
    </ul>
  </p>
);

render(virtualDOM, document.querySelector("#root"));
