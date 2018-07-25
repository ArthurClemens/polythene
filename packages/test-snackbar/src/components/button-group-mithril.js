import { renderer as h, Button, Snackbar } from "polythene-mithril";

export default {
  view: ({ attrs }) =>
    h(".pe-button-row", [
      attrs.variations.map(opts =>
        h(Button, {
          raised: true,
          label: opts.label,
          events: { onclick: () => Snackbar.show(Object.assign(
            {},
            opts,
            attrs.snackbarOptions,
            { key: opts.title } // add a key to let Mithril better distinguish between the notifications
          ), attrs.spawnOptions) }
        })
      ),
      h(Button, {
        raised: true,
        label: "Hide",
        disabled: Snackbar.count() === 0,
        events: { onclick: () => Snackbar.hide(attrs.spawnOptions) }
      }),
      h(Button, {
        raised: true,
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
