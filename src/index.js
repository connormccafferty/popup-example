import React from "react";
import ReactDOM from "react-dom";

import InBrowser from "./InBrowser";
import AppRouter from "./AppRouter";

const ROOT_NODE = document.getElementById("root");

const mount = () => {
  if (window.fin !== "undefined") {
    ReactDOM.render(<AppRouter />, ROOT_NODE);
  } else {
    ReactDOM.render(<InBrowser />, ROOT_NODE);
  }
};

mount();
