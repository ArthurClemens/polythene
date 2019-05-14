
const iconAccountSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"/></svg>";

export default ({ h, a, Icon, List, ListTile, Dialog }) => ({
  title: "Set backup account",
  menu: h(List, {
    padding: "bottom",
    tiles: [1, 2, 3].map(num =>
      h(ListTile, {
        key: num,
        front: h(Icon, {
          size: "large",
          style: {
            color: "#5e97f6",
            backgroundColor: "#c6dafc",
            borderRadius: "50%"
          },
          svg: { content: h.trust(iconAccountSVG) }
        }),
        hoverable: true,
        title: "Account",
        events: {
          [a.onclick]: () => Dialog.hide()
        }
      })
    )
  })
});