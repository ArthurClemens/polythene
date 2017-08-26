
export default ({ renderer: h, keys: k, Button, file }) => ({
  title: "Select a file...",
  body: h("input", {
    type: "file",
    id: "file",
    name: "file",
    [k.onchange]: e => file(e.target.value)
  }),
  formOptions: {
    name: "demo",
    type: "post",
    [k.enctype]: "multipart/form-data",
    [k.onsubmit]: e => {
      e.preventDefault();
      alert("Posted: " + file());
      file(null);
    }
  },
  footerButtons: [
    h(Button, {
      label: "Cancel"
    }),
    h(Button, {
      disabled: file() === undefined,
      label: "Post",
      element: "button",
      type: "submit"
    })
  ]
});