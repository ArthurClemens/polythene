import { renderer as h, Dialog, Button, Toolbar, IconButton } from "polythene-react";

const iconClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";

const content = "Content...";

const toolbarRow = title => [
  h(IconButton, {
    key: "close",
    icon: {
      svg: h.trust(iconClose)
    },
    events: {
      onClick: () => Dialog.hide()
    }
  }),
  h("span.flex", { key: "spacer" }, title),
  h(Button, {
    key: "save",
    label: "Save",
    events: {
      onClick: () => Dialog.hide()
    }
  })
];

export default {
  fullscreen: true,
  backdrop: true,
  content: [
    h(Toolbar,
      {
        content: toolbarRow("New event"),
        key: "header"
      }
    ),
    // content
    h("div",
      {
        style: { padding: "21px" },
        key: "content"
      },
      h.trust(content)
    )
  ]
};
