import { renderer as h, Dialog, Button, Toolbar, IconButton } from "polythene-react";

const iconClose = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";

const content = "Content...";

Toolbar.theme(".tests-dialog-react-themed-toolbar", {
  color_dark_background:  "#00c853"
});

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
  fullScreen: true,
  backdrop: true,
  header: h(Toolbar,
    {
      className: "tests-dialog-react-themed-toolbar",
      tone: "dark",
      content: toolbarRow("New event")
    }
  ),
  body: h.trust(content)
};
