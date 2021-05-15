import * as fromPolythene from "polythene-mithril";
import { h, a } from "cyano-mithril";
import createGenericTests from "./generic";
import { sectionKeys } from "../constants";

const testProps = { fromPolythene, h, a };

const createMithrilTests = ({ fromPolythene: { Button } }) => ({
  [sectionKeys.interactive]: [
    {
      name: "disabled",
      component: {
        oninit: ({ state }) => {
          Object.assign(state, {
            clickCount: 0,
          });
        },
        view: ({ state }) =>
          h(Button, {
            label: "disabled",
            element: "button",
            disabled: true,
            events: {
              [a.onclick]: () => {
                state.clickCount += 1;
              },
            },
            dataSet: {
              clickcount: state.clickCount.toString(),
            },
            testId: "button-disabled",
          }),
      },
    },
    {
      name: "events: onclick",
      component: {
        oninit: ({ state }) => {
          Object.assign(state, {
            clickCount: 0,
          });
        },
        view: ({ state }) =>
          h(Button, {
            label: "onclick",
            element: "button",
            events: {
              [a.onclick]: () => {
                state.clickCount += 1;
              },
            },
            dataSet: {
              clickcount: state.clickCount.toString(),
            },
            testId: "button-events-onclick",
          }),
      },
    },
    {
      name: "formAction",
      component: {
        view: () =>
          h(
            "form",
            {
              key: "button-formAction",
              action: "/default",
              method: "GET",
            },
            h(Button, {
              label: "formAction",
              [a.formaction]: "/#",
              element: "button",
              type: "submit",
              testId: "button-formAction",
            })
          ),
      },
    },
  ],
});

const genericTests = createGenericTests(testProps);
const mithrilTests = createMithrilTests(testProps);

export const Button = Object.assign(
  {},
  genericTests,
  Object.keys(sectionKeys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: []
        .concat(genericTests[key])
        .concat(mithrilTests[key])
        .filter(Boolean),
    }),
    {}
  )
);
