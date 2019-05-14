import { longText, cancelOkButtons } from "./shared";
import form from "./components/form";
import stream from "mithril/stream";
import { DialogPaneCSS, ToolbarCSS } from "polythene-css";

export default ({ h, a, DialogPane, Toolbar, ToolbarTitle, Button }) => {

  DialogPaneCSS.addStyle(".dialog-pane-tests-blue-dialog", {
    color_light_background: "#2196F3",
    color_light_body_text:  "#fff"
  });

  ToolbarCSS.addStyle(".tests-dialog-pane-themed-toolbar", {
    color_light_background: "#00c853",
    color_dark_background:  "#333"
  });

  const paneToolbar = ({ title="Header", tone="light", ...attrs } = {}) =>
    h(Toolbar, {
      ...attrs,
      tone,
      content: [
        h(ToolbarTitle, { key: "header", text: title })
      ],
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
        footerButtons: cancelOkButtons({ h, Button }),
      }
    },
    {
      name: "With Toolbar as header and footer, fullBleed",
      component: DialogPane,
      attrs: {
        header: paneToolbar(),
        body: "Body",
        fullBleed: true,
        footer: paneToolbar({ title: "Footer", compact: true, tone: "dark", }),
      }
    },
    {
      name: "With Toolbar (compact), body with default padding",
      component: DialogPane,
      attrs: {
        header: paneToolbar({ compact: true }),
        body: "Body",
        footer: paneToolbar({ title: "Footer", compact: true, tone: "dark", }),
      }
    },
    {
      name: "Option: borders (always)",
      component: DialogPane,
      attrs: {
        title: "Title",
        body: h.trust(longText),
        footerButtons: cancelOkButtons({ h, Button }),
        borders: "always"
      }
    },
    {
      name: "Option: borders (never)",
      component: DialogPane,
      attrs: {
        title: "Title",
        body: h.trust(longText),
        footerButtons: cancelOkButtons({ h, Button }),
        borders: "never"
      }
    },
    {
      name: "Option: borders (overflow)",
      component: DialogPane,
      attrs: {
        title: "Title",
        body: h.trust(longText),
        footerButtons: cancelOkButtons({ h, Button }),
        borders: "overflow"
      }
    },
    {
      name: "Option: title, body, footer",
      interactive: true,
      component: DialogPane,
      attrs: {
        title: "Long dialog with a very long title that surely won't fit here",
        body: h.trust(longText),
        footerButtons: cancelOkButtons({ h, Button })
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
          h(DialogPane, form({ h, a, Button, file: vnode.state.file }))
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
        body: h.trust(longText),
        footerButtons: cancelOkButtons({ h, Button })
      }
    },
  ];
};
