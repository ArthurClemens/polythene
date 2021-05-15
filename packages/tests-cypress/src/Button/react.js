import React from "react";
import * as fromPolythene from "polythene-react";
import { a } from "cyano-react";
import { h } from "polythene-tests/utils/enhanced-renderer";
import createGenericTests from "./generic";
import { sectionKeys } from "../constants";

const testProps = { fromPolythene, h, a };

const createReactTests = ({ fromPolythene: { Button } }) => ({
  [sectionKeys.interactive]: [
    {
      name: "disabled",
      component: () => {
        const [clickCount, setClickCount] = React.useState(0);
        return (
          <Button
            label="disabled"
            element="button"
            disabled
            events={{
              onClick: () => {
                setClickCount((c) => c + 1);
              },
            }}
            dataSet={{
              clickcount: clickCount.toString(),
            }}
            testId="button-disabled"
          />
        );
      },
    },
    {
      name: "events: onclick",
      component: () => {
        const [clickCount, setClickCount] = React.useState(0);
        return (
          <Button
            label="onclick"
            element="button"
            events={{
              onClick: () => {
                setClickCount((c) => c + 1);
              },
            }}
            dataSet={{
              clickcount: clickCount.toString(),
            }}
            testId="button-events-onclick"
          />
        );
      },
    },
    {
      name: "formAction",
      component: () => {
        return (
          <form action="/default" method="GET">
            <Button
              label="Submit"
              element="button"
              type="submit"
              formAction="/#"
              testId="button-formAction"
            />
          </form>
        );
      },
    },
  ],
});

const genericTests = createGenericTests(testProps);
const reactTests = createReactTests(testProps);

export const Button = Object.assign(
  {},
  genericTests,
  Object.keys(sectionKeys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: []
        .concat(genericTests[key])
        .concat(reactTests[key])
        .filter(Boolean),
    }),
    {}
  )
);
