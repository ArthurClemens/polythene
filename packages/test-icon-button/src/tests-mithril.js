import { renderer, keys, Icon, IconButton, SVG } from "polythene-mithril";
import genericTests from "./tests-generic";

const iconFavorite = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

const mithrilTests = ({ IconButton, renderer: h }) => {
  const trustedIconFavorite = h.trust(iconFavorite);
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: url",
      interactive: true,
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        label: "Go to Shadow",
        url: {
          href: "/shadow",
          oncreate: h.route.link
        }
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-button-row.pe-light-tone", {
          style: { background: "#fff", padding: "8px 4px" }
        }, [
          h(IconButton, {
            icon: {
              svg: { content: trustedIconFavorite }
            },
          }),
          h(IconButton, {
            icon: {
              svg: { content: trustedIconFavorite }
            },
            className: "tests-icon-button-themed-icon-button"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => h(".pe-button-row", {
          style: { background: "#fff", padding: "8px 4px" }
        }, [
          h(IconButton, {
            icon: {
              svg: { content: trustedIconFavorite }
            },
            tone: "light"
          }),
          h(IconButton, {
            icon: {
              svg: { content: trustedIconFavorite }
            },
            tone: "light",
            className: "tests-icon-button-themed-icon-button"
          })
        ])
      }
    }
  ];
};

export default []
  .concat(genericTests({ IconButton, Icon, SVG, renderer, keys }))
  .concat(mithrilTests({ IconButton, SVG, renderer, keys }));
