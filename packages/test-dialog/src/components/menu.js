
const iconArrowSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/></svg>";

export default ({ renderer: h, keys: k, Icon, List, ListTile, Dialog }) => ({
  title: "Set backup account",
  menu: h(List, {
    tiles: [1, 2, 3].map(() =>
      h(ListTile, {
        front: h(Icon, {
          svg: { content: h.trust(iconArrowSVG) }
        }),
        hoverable: true,
        title: "Account",
        events: {
          [k.onclick]: () => Dialog.hide()
        }
      })
    )
  })
});