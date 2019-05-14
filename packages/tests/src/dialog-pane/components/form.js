
export default ({ h, a, Button, file }) => ({
  title: "Select a file...",
  body: h("input", {
    type: "file",
    id: "file",
    name: "file",
    [a.onchange]: e => file(e.target.value)
  }),
  formOptions: {
    name: "demo",
    type: "post",
    [a.enctype]: "multipart/form-data",
    [a.onsubmit]: e => {
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