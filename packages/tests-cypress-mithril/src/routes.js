import Button from "polythene-tests-cypress/Button/tests-mithril";
import TextField from "polythene-tests-cypress/TextField/tests-mithril";
import Switch from "polythene-tests-cypress/Switch/tests-mithril";

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
