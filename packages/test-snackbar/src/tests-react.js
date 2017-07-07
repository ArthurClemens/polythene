import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Snackbar, Dialog, Button } from "polythene-react";
import genericTests from "./tests-generic";
import buttonGroup from "./components/button-group-react";
import containerSelector from "./components/container-selector-react";

const reactTests = () => {

  return [];
    
};

export default []
  .concat(genericTests({ Snackbar, Dialog, Button, buttonGroup, containerSelector, renderer, keys }))
  .concat(reactTests({ Snackbar, Dialog, Button, buttonGroup, containerSelector, renderer, keys }));
