import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import Listimage from "./listimage";
import App from "./App";
// import Login, { ArrayL } from "./login";
// import { Netify, Showcase } from "./netify";
// import Formlist from "./form";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let userInput = prompt("Enter the username:");
// let passwordInput = prompt("Enter the password:");

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login userInput={userInput} passwordInput={passwordInput} /> */}
    {/* <ArrayL/> */}
    {/* <Listimage /> */}
    {/* <Netify /> */}
    {/* <Showcase /> */}
    {/* <Formlist /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
