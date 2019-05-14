import React from "react";
import { Notification, Dialog, Button } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
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
  .concat(genericTests({ Notification, Dialog, Button, buttonGroup, containerSelector, h, a }))
  .concat(reactTests({ Notification, Dialog, Button, buttonGroup, containerSelector, h, a }));
