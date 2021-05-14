import Button from "polythene-tests-cypress/Button/tests-react";
import TextField from "polythene-tests-cypress/TextField/tests-react";
import Switch from "polythene-tests-cypress/Switch/tests-react";

export default [
  {
    path: "/Button",
    name: "Button",
    tests: Button,
  },
  {
    path: "/Switch",
    name: "Switch",
    tests: Switch,
  },
  {
    path: "/TextField",
    name: "Text Field",
    tests: TextField,
  },
];
