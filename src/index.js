import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
