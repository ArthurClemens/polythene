import stream from "mithril/stream";

const threeButtons = [
  { label: "New" },
  { label: "My Favorites" },
  { label: "Saved" }
];

export default ({ h, Tabs }) => ({
  oninit: vnode => {
    const tab = stream({});
    Object.assign(vnode.state, {
      tab,
      redrawOnUpdate: stream.merge([tab]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const tab = state.tab();

    return h("div", [
      h("ul",
        {
          style: {
            margin: "0 0 1rem 0",
            padding: 0,
            maxHeight: "7rem",
            overflow: "hidden"
          }
        },
        [
          h("li", { key: "index" }, `${tab.index}`),
          h("li", { key: "options" }, `${JSON.stringify(tab.options)}`)
        ]
      ),
      h(Tabs, {
        tabs: threeButtons,
        autofit: true,
        onChange: newTab => state.tab(newTab)
      })
    ]);
  }
});
