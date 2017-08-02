import { renderer, Icon, SVG } from "polythene-mithril";
import genericTests from "./tests-generic";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const mithrilTests = ({ Icon, renderer: h }) => {
  const trustedIconStars = h.trust(iconStars);
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [
          h(Icon, {
            svg: trustedIconStars
          }),
          h(Icon, {
            svg: trustedIconStars,
            className: "tests-icon-themed-icon"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => h("div", {
          style: { background: "#fff" }
        }, [
          h(Icon, {
            svg: trustedIconStars,
            tone: "light"
          }),
          h(Icon, {
            svg: trustedIconStars,
            tone: "light",
            className: "tests-icon-themed-icon"
          })
        ])
      }
    }
  ];
};

export default []
  .concat(genericTests({ Icon, SVG, renderer }))
  .concat(mithrilTests({ Icon, SVG, renderer }));
