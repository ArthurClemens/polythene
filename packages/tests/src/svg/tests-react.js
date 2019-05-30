import React from "react"; // eslint-disable-line no-unused-vars
import { SVG } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import genericTests from "./tests-generic";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const iconStarsSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>;

const reactTests = ({ SVG, h }) => {
  return [
    {
      section: "React specific tests",
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: () =>
        h("div", {
          style: {
            background: "#fff",
            padding: "8px"
          },
          className: "pe-light-tone"
        }, h(SVG, { content: h.trust(iconStars) }))
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: () =>
        h("div", {
          style: {
            background: "#fff",
            padding: "8px"
          },
        }, h(SVG, {
          content: h.trust(iconStars),
          tone: "light"
        }))
    },

    {
      section: "React tests",
    },
    {
      name: "Option: svg as content attribute",
      component: () => <SVG content={iconStarsSVG} />
    },
    {
      name: "Option: SVG as component",
      component: () => <SVG>{iconStarsSVG}</SVG>
    },
    {
      name: "Option: style",
      component: () => <SVG style={{ color: "#EF6C00" }}>{iconStarsSVG}</SVG>
    },
  ];
    
};

export default []
  .concat(genericTests({ SVG, h }))
  .concat(reactTests({ SVG, h }));
