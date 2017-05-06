import { renderer, icon, iconButton } from "polythene-mithril";
import genericTests from "./tests-generic";
import iconFavorite from "mmsvg/google/msvg/action/favorite-border";

const mithrilTests = ({ iconButton, renderer: h }) => {
  return [
    {
      name: "Option: url",
      interactive: true,
      component: iconButton,
      attrs: {
        icon: {
          svg: { content: iconFavorite }
        },
        url: {
          href: "/shadow",
          oncreate: h.route.link
        }
      }
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(iconButton, {
            icon: {
              msvg: iconFavorite
            },
          }),
          h(iconButton, {
            icon: {
              msvg: iconFavorite
            },
            className: "tests-icon-button-themed-icon-button"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-theme",
      component: {
        view: () => h("div", {
          style: { background: "#fff", padding: "10px" }
        }, [
          h(iconButton, {
            icon: {
              msvg: iconFavorite
            },
            tone: "light"
          }),
          h(iconButton, {
            icon: {
              msvg: iconFavorite
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
  .concat(genericTests({ iconButton, icon, renderer }))
  .concat(mithrilTests({ iconButton, renderer }));
