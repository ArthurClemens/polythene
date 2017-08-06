import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Notification, Dialog, Button } from "polythene-react";
import genericTests from "./tests-generic";
import buttonGroup from "./components/button-group-react";
import containerSelector from "./components/container-selector-react";
import ShowNotification from "./components/show-notification-jsx";

const reactTests = () => {

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: layout vertical (JSX)",
      interactive: true,
      exclude: true,
      component: () => <ShowNotification />
    },
  ];
    
};

export default []
  .concat(genericTests({ Notification, Dialog, Button, buttonGroup, containerSelector, renderer, keys }))
  .concat(reactTests({ Notification, Dialog, Button, buttonGroup, containerSelector, renderer, keys }));
