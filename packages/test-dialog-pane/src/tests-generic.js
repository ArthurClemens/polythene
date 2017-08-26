import { longText, cancelOkButtons } from "./shared";
import form from "./components/form";
import stream from "mithril/stream";

export default ({ renderer, keys, DialogPane, Toolbar, ToolbarTitle, Button }) => {

  const h = renderer;

  DialogPane.theme(".dialog-pane-tests-blue-dialog", {
    color_light_background: "#2196F3",
    color_light_body_text:  "#fff"
  });

  Toolbar.theme(".tests-dialog-pane-themed-toolbar", {
    color_light_background: "#00c853",
    color_dark_background:  "#333"
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
        body: "Body", 
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
      name: "With Toolbar as header and footer",
      component: DialogPane,
      attrs: {
        header: h(Toolbar, {
          content: [
            h(ToolbarTitle, { key: "header", text: "Header" })
          ],
          tone: "light",
          className: "tests-dialog-pane-themed-toolbar"
        }),
        body: "Body", 
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
      name: "Themed (color)",
      component: DialogPane,
      attrs: {
        content: h("div", "Hello"),
        className: "dialog-pane-tests-blue-dialog"
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
          vnode.state = {
            file,
            redrawOnUpdate: stream.merge([file])
          };
        },
        view: vnode => (
          h(DialogPane, form({ renderer, keys, Button, file: vnode.state.file }))
        )
      }
    },
  ];
};
