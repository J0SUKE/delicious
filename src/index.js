import React from "react";
import ReactDOM  from "react-dom/client";
import "./scss/globals.scss";

import App from "./js/App.js";

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<App/>);