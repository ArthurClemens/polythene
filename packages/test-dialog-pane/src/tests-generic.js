import { longText, cancelOkButtons } from "./shared";
import form from "./components/form";
import stream from "mithril/stream";
import { DialogPaneCSS, ToolbarCSS } from "polythene-css";

export default ({ renderer, keys, DialogPane, Toolbar, ToolbarTitle, Button }) => {

  const h = renderer;

  DialogPaneCSS.addStyle(".dialog-pane-tests-blue-dialog", {
    color_light_background: "#2196F3",
    color_light_body_text:  "#fff"
  });

  ToolbarCSS.addStyle(".tests-dialog-pane-themed-toolbar", {
    color_light_background: "#00c853",
    color_dark_background:  "#333"
  });

  const paneToolbar = ({ compact } = {}) =>
    h(Toolbar, {
      compact,
      content: [
        h(ToolbarTitle, { key: "header", text: "Header" })
      ],
      tone: "light",
      className: "tests-dialog-pane-themed-toolbar"
    });


  return [
    {
      name: "Option: body",
      component: DialogPane,
      attrs: {
        body: "Hello"
      }
    },
    {
      name: "With title, body and footer",
      component: DialogPane,
      attrs: {
        title: "Title",
        body: h("div", {
          style: {
            background: "#eee"
          }
        }, "Body"), 
        
        footer: h("div",
          {
            style: {
              background: "#00c853",
              color: "#fff",
              padding: "16px 24px"
            }
          },
          "Footer"
        )
      }
    },
    {
      name: "With Toolbar as header and footer, fullBleed",
      component: DialogPane,
      attrs: {
        header: paneToolbar(),
        body: h("div", {
          style: {
            background: "#eee"
          }
        }, "Body"),
        fullBleed: true,
        footer: h(Toolbar, {
          content: [
            h(ToolbarTitle, { key: "footer", text: "Footer" })
          ],
          tone: "dark",
          className: "tests-dialog-pane-themed-toolbar"
        }),
      }
    },
    {
      name: "With Toolbar (compact)",
      component: DialogPane,
      attrs: {
        header: paneToolbar({ compact: true }),
        body: "Body"
      }
    },
    {
      name: "Option: borders (always)",
      component: DialogPane,
      attrs: {
        title: "Title",
        body: renderer.trust(longText),
        footer: "Footer",
        borders: "always"
      }
    },
    {
      name: "Option: borders (never)",
      component: DialogPane,
      attrs: {
        title: "Title",
        body: renderer.trust(longText),
        footer: "Footer",
        borders: "never"
      }
    },
    {
      name: "Option: borders (overflow)",
      component: DialogPane,
      attrs: {
        title: "Title",
        body: renderer.trust(longText),
        footer: "Footer",
        borders: "overflow"
      }
    },
    {
      name: "Option: title, body, footer",
      interactive: true,
      component: DialogPane,
      attrs: {
        title: "Long dialog with a very long title that surely won't fit here",
        body: renderer.trust(longText),
        footerButtons: cancelOkButtons({ renderer, Button })
      }
    },
    {
      name: "Conditional button states",
      interactive: true,
      component: {
        oninit: vnode => {
          const file = stream();
          Object.assign(vnode.state, {
            file,
            redrawOnUpdate: stream.merge([file]) // for React
          });
        },
        view: vnode => (
          h(DialogPane, form({ renderer, keys, Button, file: vnode.state.file }))
        )
      }
    },
    {
      name: "Option: style",
      component: DialogPane,
      attrs: {
        body: "Hello",
        style: {
          background: "#fff59d",
          padding: "1.5rem"
        }
      }
    },

    {
      section: "Themed",
    },
    {
      name: "Themed (color)",
      component: DialogPane,
      attrs: {
        content: h("div", "Hello"),
        className: "dialog-pane-tests-blue-dialog"
      }
    },

    {
      section: "Right-to-left",
    },
    {
      name: "Option: title, body, footer (RTL)",
      interactive: true,
      component: DialogPane,
      attrs: {
        className: "pe-rtl",
        title: "Long dialog with a very long title that surely won't fit here",
        body: renderer.trust(longText),
        footerButtons: cancelOkButtons({ renderer, Button })
      }
    },
  ];
};
