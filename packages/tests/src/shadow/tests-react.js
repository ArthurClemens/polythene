import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, Shadow } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Shadow, renderer: h }) => { // eslint-disable-line no-unused-vars

  class InteractiveTest extends Component {

    constructor() {
      super(...arguments);
      this.state = {
        z: 1
      };
    }

    render() {
      return h("div", null, [
        h(".absolute.absolute--fill", {
          onClick: () => this.setState({
            z: (this.state.z + 1) % 6
          })
        }, "Click me"),
        h(Shadow, {
          animated: true,
          z: this.state.z
        })
      ]);
    }
  }

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Add to a React element",
      component: () =>
        h("div", null, [
          h("div", "Some element"),
          h(Shadow)
        ])
    },
    {
      name: "Interactive option: animated",
      interactive: true,
      exclude: true,
      component: InteractiveTest
    },

    // Dark tone

    {
      name: "Interactive option: animated -- dark tone class",
      interactive: true,
      className: "pe-dark-tone",
      component: InteractiveTest
    }
  ];
};

export default []
  .concat(genericTests({ Shadow, renderer }))
  .concat(reactTests({ Shadow, renderer }));
