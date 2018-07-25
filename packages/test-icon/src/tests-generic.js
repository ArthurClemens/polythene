import { IconCSS } from "polythene-css";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

export default ({ Icon, SVG, renderer: h }) => {
  
  const trustedIconStars = h.trust(iconStars);

  IconCSS.addStyle(".tests-icon-themed-icon", {
    size_regular: 50,
    color_light: "purple",
    color_dark: "orange"
  });

  const sizeNames = ["small", "regular", "medium", "large"];

  const sizes = (sizes, attrs) => sizes.map(size =>
    h(Icon, Object.assign(
      {},
      attrs,
      { size }
    ))
  );

  return [
    {
      name: "Child node (trusted svg children)",
      component: Icon,
      attrs: null,
      children: h(SVG, [trustedIconStars])
    },
    {
      name: "Option: content",
      component: Icon,
      attrs: {
        content: trustedIconStars
      }
    },
    {
      name: "Option: content (trusted svg content)",
      component: Icon,
      attrs: {
        svg: { content: trustedIconStars }
      }
    },
    {
      name: "Option: style",
      component: Icon,
      attrs: {
        svg: { content: trustedIconStars },
        style: {
          color: "#EF6C00"
        }
      }
    },
    {
      name: "Themed (color and size)",
      component: Icon,
      attrs: {
        svg: { content: trustedIconStars },
        className: "tests-icon-themed-icon"
      }
    },
    {
      name: "Option: size",
      component: {
        view: () => h("div",
          {
            style: {
              display: "flex",
              alignItems: "center"
            }
          },
          sizes(sizeNames, {
            svg: { content: trustedIconStars },
          })
        )
      }
    },
    {
      name: "Option: src (image file)",
      component: Icon,
      attrs: {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
      }
    },
    {
      name: "Option: src (svg file)",
      component: Icon,
      attrs: {
        src: "http://arthurclemens.github.io/assets/polythene/examples/recycle.svg"
      }
    },
    {
      name: "Option: avatar (size large)",
      component: Icon,
      attrs: {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        size: "large"
      }
    },

    {
      section: "Dark tone",
    },
    {
      name: "Child node (trusted svg children) -- dark tone class (color set with style option)",
      component: Icon,
      className: "pe-dark-tone",
      attrs: {
        style: {
          color: "#fff"
        }
      },
      children: h(SVG, [trustedIconStars])
    },
    {
      name: "Themed (color and size) -- dark tone class",
      component: Icon,
      className: "pe-dark-tone",
      attrs: {
        svg: { content: trustedIconStars },
        className: "tests-icon-themed-icon"
      }
    },
  ];
};

