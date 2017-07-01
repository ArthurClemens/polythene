import { renderer as h, RaisedButton, Notification } from "polythene-mithril";

export default (messageOptions, spawnOptions) => ({
  view: () =>
    h("div", [
      h(RaisedButton, {
        label: "Show",
        events: { onclick: () => Notification.show(messageOptions, spawnOptions) }
      }),
      h(RaisedButton, {
        label: "Hide",
        disabled: Notification.count() === 0,
        events: { onclick: () => Notification.hide(spawnOptions) }
      }),
      h(RaisedButton, {
        label: "Clear",
        disabled: Notification.count() === 0,
        events: {
          onclick: () => {
            Notification.hide(spawnOptions).then(() => {
              Notification.clear();
              m.redraw();
            });
          }
        }
      })
    ])
});
