
export default ({ renderer: h, Drawer, createContent, drawerOpts }) => {
  const content = createContent({ isLong: false });
  return {
    view: () =>
      h(Drawer, Object.assign(
        {},
        {
          permanent: true,
          content
        },
        drawerOpts
      ))
  };
};
