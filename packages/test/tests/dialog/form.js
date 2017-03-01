import m from "mithril";
import dialog from "polythene-dialog";
import button from "polythene-button";
import { commonDialogProps } from "./shared";

let hasValue = false;

// use a function to have the state of hasValue reflected in the dialog
export default () => {
  return Object.assign({}, commonDialogProps, {
    title: "Select a file...",
    body: m("input", {
      type: "file",
      id: "file",
      name: "file",
      onchange: e => {
        const fileInput = e.target;
        hasValue = (fileInput.value !== undefined);
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
        dialog.hide();
        hasValue = false;
      }
    },
    footer: [
      m(button, {
        label: "Cancel",
        events: {
          onclick: () => dialog.hide()
        }
      }),
      m(button, {
        disabled: !hasValue,
        label: "Post",
        element: "button",
        type: "submit"
      })
    ],
    didHide: () => hasValue = false
  });
};
