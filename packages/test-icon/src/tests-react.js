import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Icon, SVG } from "polythene-react";
import genericTests from "./tests-generic";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const iconStarsSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>;

const reactTests = ({ Icon, SVG, renderer: h }) => { // eslint-disable-line no-unused-vars
  return [
    {
      section: "React specific tests",
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: () =>
        h(".pe-light-tone", {
          style: { background: "#fff", padding: "8px" }
        }, [
          h(Icon, {
            svg: { content: h.trust(iconStars) },
          }),
          h(Icon, {
            svg: { content: h.trust(iconStars) },
            className: "tests-icon-themed-icon"
          })
        ])
    },
    {
      name: "Dark tone class + light tone",
      className: "pe-dark-tone",
      component: () =>
        h("div", {
          style: { background: "#fff", padding: "8px" }
        }, [
          h(Icon, {
            svg: { content: h.trust(iconStars) },
            tone: "light"
          }),
          h(Icon, {
            svg: { content: h.trust(iconStars) },
            tone: "light",
            className: "tests-icon-themed-icon"
          })
        ])
    },

    {
      section: "React JSX tests",
    },
    {
      name: "Option: svg as attribute (JSX)",
      component: () => <Icon svg={{ content: iconStarsSVG }} />
    },
    {
      name: "Option: SVG as component (JSX)",
      component: () => <Icon><SVG>{iconStarsSVG}</SVG></Icon>
    },
    {
      name: "Option: style (JSX)",
      component: () => <Icon style={{ color: "#EF6C00" }}><SVG>{iconStarsSVG}</SVG></Icon>
    },
  ];
};

export default []
  .concat(genericTests({ Icon, SVG, renderer }))
  .concat(reactTests({ Icon, SVG, renderer }));

