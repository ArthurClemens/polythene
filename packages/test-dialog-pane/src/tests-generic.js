import { longText, cancelOkButtons } from "./shared";
import form from "./components/form";
import stream from "mithril/stream";

export default ({ renderer, keys, DialogPane, Button }) => {

  DialogPane.theme(".dialog-pane-tests-blue-dialog", {
    color_light_background: "#2196F3",
    color_light_body_text:          "#fff"
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
      name: "Themed (color)",
      component: DialogPane,
      attrs: {
        content: renderer("div", "Hello"),
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
        footer: cancelOkButtons({ renderer, Button })
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
          renderer(DialogPane, form({ renderer, keys, Button, file: vnode.state.file }))
        )
      }
    },
  ];
};
