import { renderer, SVG } from "polythene-mithril";
import genericTests from "./tests-generic";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const mithrilTests = ({ SVG, renderer: h }) => {
  const trustedIconStars = h.trust(iconStars);
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h("div", {
            style: {
              background: "#fff",
              padding: "10px"
            },
            className: "pe-light-tone"
          }, h(SVG, {content: trustedIconStars}))
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () =>
          h("div", {
            style: {
              background: "#fff",
              padding: "10px"
            },
          }, h(SVG, {
            content: trustedIconStars,
            tone: "light"
          }))
      }
    },
  ];
    
};

export default []
  .concat(genericTests({ SVG, renderer }))
  .concat(mithrilTests({ SVG, renderer }));
