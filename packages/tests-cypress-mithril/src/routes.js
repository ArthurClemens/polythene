import Button from "polythene-tests-cypress/Button/tests-mithril";
import TextField from "polythene-tests-cypress/TextField/tests-mithril";
import Switch from "polythene-tests-cypress/Switch/tests-mithril";

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
