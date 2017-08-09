import { renderer as h, Dialog, Button } from "polythene-mithril";
import stream from "mithril/stream";

const file = stream(null);
file.map(h.redraw); // redraw whenever file changes value

// Return a function so that the component attributes are not rendered statically
export default () => ({
  title: "Select a file...",
  body: h("input", {
    type: "file",
    id: "file",
    name: "file",
    onchange: e => file(e.target.value)
  }),
  formOptions: {
    name: "demo",
    type: "post",
    enctype: "multipart/form-data",
    onsubmit: e => {
      e.preventDefault();
      const form = e.target;
      alert("Posted: " + form.file.value);
      Dialog.hide();
      file(null);
    }
  },
  footer: [
    h(Button, {
      label: "Cancel",
      events: {
        onclick: () => Dialog.hide()
      }
    }),
    h(Button, {
      disabled: file() === null,
      label: "Post",
      element: "button",
      type: "submit"
    })
  ],
  didHide: () => file(null)
});
