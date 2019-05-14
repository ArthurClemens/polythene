import React from "react"; // eslint-disable-line no-unused-vars
import { Ripple } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import genericTests from "./tests-generic";
import { compose, withState, withHandlers } from "recompose";
import { RippleCSS } from "polythene-css";

const reactTests = ({ Ripple, h }) => { // eslint-disable-line no-unused-vars

  const withCounter = compose(
    withState("counter", "setCounter", 0),
    withHandlers({
      increment: ({ setCounter }) => () => setCounter(n => n + 1)
    })
  );

  RippleCSS.addStyle(".react-ripple-themed-ripple", {
    color_light: "#F44336"
  });

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Appended to an element",
      interactive: true,
      exclude: true,
      component: () =>
        h("div",
          {
            style: {
              position: "relative",
              width:    "100px",
              height:   "100px",
            }
          },
          h(Ripple)
        )
    },
    {
      name: "Option: start (after click)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        h(Ripple, {
          before: h("div", `start called: ${counter}`),
          start: () => increment()
        })
      )
    },
    {
      name: "Option: end (after click)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        h(Ripple, {
          before: h("div", `start called: ${counter}`),
          end: () => increment()
        })
      )
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Option: center (JSX)",
      component: () => <Ripple center={true} />
    },
    {
      name: "Themed (should be red and permanent) (JSX)",
      component: () => <Ripple
        className="react-ripple-themed-ripple"
        endOpacity={1.0}
        persistent
      />
    },
    {
      name: "Appended to an element (JSX)",
      component: () =>
        <div style={{
          position: "relative",
          width:    "100px",
          height:   "100px",
        }}>
          <Ripple />
        </div>
    },

  ];
};
export default []
  .concat(genericTests({ Ripple, h }))
  .concat(reactTests({ Ripple, h }));
