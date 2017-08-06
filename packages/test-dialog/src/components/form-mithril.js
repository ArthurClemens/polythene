import { renderer as h, Dialog, Button } from "polythene-mithril";
import stream from "mithril/stream";

const file = stream(null);

// use a function to have the state of hasValue reflected in the Dialog
export default () => {
  // Return a function so that these component attributes are not rendered statically:
  return () => ({
    title: "Select a file...",
    body: h("input", {
      type: "file",
      id: "file",
      name: "file",
      onchange: e => {
        const fileInput = e.target;
        file(fileInput.value);
        setTimeout(h.redraw);
      }
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
};
