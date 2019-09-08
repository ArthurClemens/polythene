
export default ({ h, a, TextField }) => ({
  view: vnode => {
    const state = vnode.state;
    return h("div", null, [
      h(TextField, {
        label: "Focus and then blur the field",
          events: {
            [a.onfocus]: e => console.log("onfocus called", e),
            [a.onblur]: e => console.log("onblur called", e),
            [a.onkeydown]: e => console.log("onkeydown called", e),
            [a.onclick]: e => console.log("onclick called", e),
            [a.oninput]: e => console.log("oninput called", e),
          }
      }),
      
    ]);
  }
});
