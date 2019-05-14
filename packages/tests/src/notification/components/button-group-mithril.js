import { Button, Notification } from "polythene-mithril";
import { h } from "cyano-mithril";

export default (messageOptions, spawnOptions) => ({
  view: () =>
    h(".pe-button-row", [
      h(Button, {
        raised: true,
        label: "Show",
        events: { onclick: () => Notification.show(messageOptions, spawnOptions) }
      }),
      h(Button, {
        raised: true,
        label: "Hide",
        disabled: Notification.count() === 0,
        events: { onclick: () => Notification.hide(spawnOptions) }
      }),
      h(Button, {
        raised: true,
        label: "Clear",
        disabled: Notification.count() === 0,
        events: {
          onclick: () => Notification.hide(spawnOptions).then(() =>
            Notification.clear()
          )
        }
      })
    ])
});
