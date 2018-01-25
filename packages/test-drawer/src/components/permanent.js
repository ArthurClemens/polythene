
export default ({ renderer: h, Drawer, content }) => ({
  view: () =>
    h(Drawer, {
      size: 5,
      permanent: true,
      content
    })
});