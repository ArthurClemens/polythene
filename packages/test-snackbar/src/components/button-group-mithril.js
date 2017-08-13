import { renderer as h, RaisedButton, Snackbar } from "polythene-mithril";

export default {
  view: ({ attrs }) =>
    h("div", [
      attrs.variations.map(opts =>
        h(RaisedButton, {
          label: opts.label,
          events: { onclick: () => Snackbar.show(Object.assign(
            {},
            opts,
            attrs.snackbarOptions,
            { key: opts.title } // add a key to let Mithril better distinguish between the notifications
          ), attrs.spawnOptions) }
        })
      ),
      h(RaisedButton, {
        label: "Hide",
        disabled: Snackbar.count() === 0,
        events: { onclick: () => Snackbar.hide(attrs.spawnOptions) }
      }),
      h(RaisedButton, {
        label: "Clear",
        disabled: Snackbar.count() === 0,
        events: {
          onclick: () => Snackbar.hide(attrs.spawnOptions).then(() =>
            Snackbar.clear()
          )
        }
      })
    ])
};
