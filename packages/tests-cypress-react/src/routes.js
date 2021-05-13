import testButton from "polythene-tests-cypress/Button/tests-react";
import testTextField from "polythene-tests-cypress/TextField/tests-react";

const routeData = [
  {
    path: "/Button",
    name: "Button",
    tests: testButton,
  },
  {
    path: "/TextField",
    name: "Text Field",
    tests: testTextField,
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
