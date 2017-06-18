import stream from "mithril/stream";

const threeButtons = [
  { label: "New" },
  { label: "My Favorites" },
  { label: "Saved" }
];

export default ({ h, Tabs }) => ({
  oninit: vnode => {
    const tab = stream({});
    vnode.state = {
      tab,
      redrawOnUpdate: stream.merge([tab])
    };
  },
  view: vnode => {
    const state = vnode.state;
    const tab = state.tab();

    return h("div",
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
          h("li", { key: "data" }, `${JSON.stringify(tab.data)}`)
        ]
      ),
      h(Tabs, {
        buttons: threeButtons,
        autofit: true,
        getState: newTab => state.tab(newTab)
      })
    );
  }
});
