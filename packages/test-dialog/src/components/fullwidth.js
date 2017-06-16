
export default ({ renderer: h, keys: k, Dialog, Button }) => ({
  style: {
    width: "280px"
  },
  body: [
    h(".pe-dialog__title", "Let your apps know your location"),
    h("div", "This means that your location data will be sent to our servers, anonymously of course.")
  ],
  footer: [
    h(Button, {
      label: "Turn on location services",
      events: {
        [k.onclick]: () => Dialog.hide()
      }
    }),
    h(Button, {
      label: "No thanks",
      events: {
        [k.onclick]: () => Dialog.hide()
      }
    })
  ]
});