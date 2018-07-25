import { SVGCSS } from "polythene-css";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

export default ({ SVG, renderer: h }) => {

  const trustedIconStars = h.trust(iconStars);

  SVGCSS.addStyle(".tests-svg-themed-svg", {
    color_light: "#0D47A1",
    color_dark: "orange"
  });

  return [
    {
      name: "Child node (trusted)",
      component: SVG,
      attrs: null,
      children: [trustedIconStars]
    },
    {
      name: "Option: content (trusted)",
      component: SVG,
      attrs: {
        content: trustedIconStars
      },
    },
    {
      name: "Option: style (color)",
      component: SVG,
      attrs: {
        content: trustedIconStars,
        style: {
          color: "#EF6C00"
        }
      }
    },
    {
      name: "Themed (color)",
      component: SVG,
      attrs: {
        content: trustedIconStars,
        className: "tests-svg-themed-svg"
      }
    },

    {
      section: "Dark tone",
    },
    {
      name: "Option: content -- dark tone class",
      className: "pe-dark-tone",
      component: SVG,
      attrs: {
        content: trustedIconStars
      },
    },
    {
      name: "Themed (color) -- dark tone class",
      component: SVG,
      className: "pe-dark-tone",
      attrs: {
        content: trustedIconStars,
        className: "tests-svg-themed-svg"
      }
    },
  ];
};


