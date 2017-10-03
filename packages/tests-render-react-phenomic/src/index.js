import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import App from "./App";

import "polythene-css/dist/polythene.css";
import "polythene-css/dist/polythene-typography.css";

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
));
