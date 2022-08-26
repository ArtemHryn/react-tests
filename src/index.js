import React from "react"; // це потрібно лише коли ми викорисутовуємо React.createElement та подібні методи
// import { render } from "react-dom";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
// import paintingRen from "./paining.json";
import App from "./App";

// const span1 = React.createElement("span", { children: "span1" });
// const jsxSpan1 = <span>span1</span>;
// const testVar = 100;

// const jsxEl = (
//   <div className="test">
//     My 1st App {jsxSpan1} {testVar}
//   </div>
// );
// const element = React.createElement('div', { className: 'test', children: 'My 1st App' })

// console.log(jsxEl);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(jsxEl);

// const data = paintingRen[2];

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
