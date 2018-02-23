
export default ({ renderer: h, Drawer, createContent }) => {
  const content = createContent({ isLong: false });
  return {
    view: () =>
      h(Drawer, {
        size: 5,
        permanent: true,
        content
      })
  };
};
