import Button from "polythene-tests-cypress/Button/tests-react";
import TextField from "polythene-tests-cypress/TextField/tests-react";
import Switch from "polythene-tests-cypress/Switch/tests-react";

const routeData = [
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

const routes = routeData.reduce(
  (acc, route) => [
    ...acc,
    route,
    // ...route.tests.map((test) => {
    //   return {
    //     path: test.path,
    //     name: `- ${test.name}`,
    //     tests: [test],
    //   };
    // }),
  ],
  []
);

export default routes;
