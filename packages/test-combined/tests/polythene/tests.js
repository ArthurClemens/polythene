import m from "mithril";
import * as polythene from "polythene";
import { styles as blockStyles, blocks } from "../../../test/tests/css-classes/block-styles";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";
import gIconMenu from "mmsvg/google/msvg/navigation/menu";
import gIconAdd from "mmsvg/google/msvg/content/add";
import { commonDialogProps, longText} from "./dialog";
import menuItems from "./menu";
import searchfield from "./searchfield";

const SVG = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>");

polythene.styler.add("polythene-css-classes", blockStyles);

polythene.button.theme(".tests-polythene-themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});
polythene.raisedButton.theme(".tests-polythene-themed-raised-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

polythene.fab.theme(".tests-polythene-themed-fab", {
  color_light_background: "#FF1744",
  color_light: "#fff"
});

const dialogProps = Object.assign({}, commonDialogProps, {
  title: "Long dialog with a very long title that surely won't fit here",
  body: m.trust(longText),
  modal: true,
  backdrop: true,
  class: "pe-dark-theme"
});

const block = (test, opts = {}) => m("div", {
  style: Object.assign(
    {},
    opts.dark ? null : { background: "#fff" },
    opts.fullWidth
      ? null
      : { padding: "10px 15px" }
  )}, test);

const pattern = (foreground, background) => ({
  "background-image": `radial-gradient(circle at 100% 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, ${background} 10%, ${foreground} 11%, ${foreground} 23%, ${background} 24%, ${background} 30%, ${foreground} 31%, ${foreground} 43%, ${background} 44%, ${background} 50%, ${foreground} 51%, ${foreground} 63%, ${background} 64%, ${background} 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent)`,
  "background-size": "100px 50px"
});

export const tests = [
  {
    name: "Button",
    component: polythene.button,
    attrs: {
      label: "Button"
    }
  },
  {
    name: "Button (theme: red)",
    component: polythene.button,
    attrs: {
      class: "tests-polythene-themed-button",
      label: "Button"
    }
  },
  {
    name: "Raised button",
    component: polythene.raisedButton,
    attrs: {
      label: "Raised button"
    }
  },
  {
    name: "Raised button (theme: red)",
    component: polythene.raisedButton,
    attrs: {
      class: "tests-polythene-themed-raised-button",
      label: "Raised button"
    }
  },
  {
    name: "Checkbox",
    component: polythene.checkbox,
    attrs: {
      label: "Label",
      checked: true
    }
  },
  {
    name: "Dialog",
    exclude: true,
    component: {
      view: () => m(polythene.raisedButton, {
        label: "Open dialog",
        events: {
          onclick: () => polythene.dialog.show(dialogProps)
        }
      })
    }
  },
  {
    name: "FAB",
    component: polythene.fab,
    attrs: {
      icon: {
        svg: { content: SVG }
      }
    }
  },
  {
    name: "FAB (theme: red)",
    component: polythene.fab,
    attrs: {
      class: "tests-polythene-themed-fab",
      icon: {
        svg: { content: SVG }
      }
    }
  },
  {
    name: "Icon",
    component: polythene.icon,
    attrs: {
      svg: { content: SVG }
    }
  },
  {
    name: "Icon Button",
    component: polythene.iconButton,
    attrs: {
      style: {
        backgroundColor: "#fff"
      },
      icon: {
        svg: { content: SVG }
      }
    }
  },

  {
    name: "List",
    component: polythene.list,
    attrs: {
      header: {
        title: "Friends"
      },
      borders: true,
      tiles: [
        m(polythene.listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc",
          front: m(polythene.icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
            type: "large"
          })
        }),
        m(polythene.listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?",
          front: m(polythene.icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
            avatar: true,
            type: "large"
          })
        })
      ]
    }
  },

  {
    name: "List Tile",
    component: polythene.listTile,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      front: m(polythene.icon, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      }),
      secondary: {
        icon: {
          msvg: iconStarOutline,
          type: "medium"
        },
        url: {
          href: "/",
          oncreate: m.route.link
        }
      }
    }
  },
  {
    name: "Menu",
    component: menuItems
  },
  {
    name: "Notification",
    exclude: true,
    component: {
      view: () => [
        m(polythene.raisedButton, {
          label: "Show",
          events: {
            onclick: () => polythene.notification.show({
              title: "This message tells some things using two lines"
            })
          }
        }),
        m(polythene.raisedButton, {
          label: "Hide",
          disabled: polythene.notification.count() === 0,
          events: {
            onclick: () => polythene.notification.hide()
          }
        })
      ]
    }
  },
  {
    name: "Notification - Snackbar",
    interactive: true,
    exclude: true,
    component: {
      view: () => [
        m(polythene.raisedButton, {
          label: "Show",
          events: {
            onclick: () => polythene.snackbar.show({
              title: "This message tells some things using two lines"
            }, {spawn: "container-snackbar"})
          }
        }),
        m(polythene.raisedButton, {
          label: "Hide",
          disabled: polythene.snackbar.count() === 0,
          events: {
            onclick: () => polythene.snackbar.hide()
          }
        }),
        m("div",
          {
            style: Object.assign({}, pattern("#fff", "#eceff1"), {
              height: "180px",
              marginTop: "10px",
              overflow: "hidden",
              position: "relative"
            })
          },
          m(polythene.snackbar, { spawn: "container-snackbar", position: "container" })
        )
      ]
    }
  },
  {
    name: "Radio button",
    component: {
      view: () => {
        const options = {
          label: "Label",
          name: "radio"
        };
        return m("div", [
          m(polythene.radioButton, options),
          m(polythene.radioButton, Object.assign({}, options, {checked: true}))
        ]);
      }
    }
  },
  {
    name: "Ripple",
    component: polythene.ripple,
    attrs: {}
  },
  {
    name: "Search",
    component: searchfield,
    attrs: {}
  },
  {
    name: "Shadow",
    component: polythene.shadow,
    attrs: {}
  },
  {
    name: "Slider",
    component: polythene.slider,
    attrs: {
      min: 0,
      max: 100,
      step: 10,
      value: 2,
      pin: true,
      ticks: true
    }
  },
  {
    name: "SVG",
    component: polythene.svg,
    attrs: {
      content: SVG
    }
  },
  {
    name: "Switch",
    component: polythene.switchButton,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Tabs",
    component: polythene.tabs,
    attrs: {
      autofit: true,
      content: [
        { label: "New" },
        { label: "My Favorites" },
        { label: "Saved" }
      ]
    }
  },
  {
    name: "Textfield",
    component: {
      view: () => block([
        m(polythene.textfield, {
          label: "Your name",
          floatingLabel: true,
          help: "Enter the name as written on the credit card",
          required: true
        })
      ])
    }
  },
  {
    name: "Toolbar",
    component: polythene.toolbar,
    attrs: {
      content: [
        m(polythene.iconButton, {
          icon: {msvg: gIconMenu }
        }),
        m("span", "Title"),
        m(polythene.iconButton, {
          icon: {msvg: gIconAdd }
        })
      ]
    }
  },
  {
    name: "CSS Classes: blocks should be aligned vertically",
    component: {
      view: () => m(".vertical-blocks",
        blocks
      )
    }
  },
  {
    name: "CSS Classes: blocks should be justified horizontally",
    component: {
      view: () => m(".layout.justified",
        blocks
      )
    }
  }
];
