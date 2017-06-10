const iconAccountSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"/></svg>";

export default ({ renderer: h, keys: k, Icon, List, ListTile, Dialog }) => ({
  title: "Set backup account",
  menu: h(List, {
    tiles: [1, 2, 3].map(() =>
      h(ListTile, {
        style: { color: "#00bad2" },
        front: h(Icon, {
          size: "large",
          svg: h.trust(iconAccountSVG)
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