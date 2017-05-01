// import iconStars from "mmsvg/google/svg/action/stars.svg";

const iconStars = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

const iconLink = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

export default ({ svg, renderer: h }) => {

  const trustedIconLink = h.trust(iconLink);
  const trustedIconStars = h.trust(iconStars);

  svg.theme(".tests-svg-themed-svg", {
    color_light: "#0D47A1",
    color_dark: "orange"
  });

  return [
    {
      name: "Child node",
      component: svg,
      attrs: null,
      children: [trustedIconLink]
    },
    {
      name: "Option: content",
      component: svg,
      attrs: {
        content: trustedIconStars
      },
    },
    {
      name: "Option: style (color)",
      component: svg,
      attrs: {
        content: trustedIconStars,
        style: {
          color: "#EF6C00"
        }
      }
    },
    {
      name: "Themed (color)",
      component: svg,
      attrs: {
        content: trustedIconStars,
        className: "tests-svg-themed-svg"
      }
    },

    // Dark tone

    {
      name: "Option: content -- dark theme class",
      className: "pe-dark-tone",
      component: svg,
      attrs: {
        content: trustedIconStars
      },
    },
    {
      name: "Themed (color) -- dark theme class",
      component: svg,
      className: "pe-dark-tone",
      attrs: {
        content: trustedIconStars,
        className: "tests-svg-themed-svg"
      }
    },
  ];
};


