export default ({ rootPath, h, TextField }) => ({
  path: `${rootPath}/defaultValue`,
  name: "Text Field: defaultValue",
  component: {
    view: () =>
      h(TextField, {
        testId: "defaultValue",
        defaultValue: "Text",
        key: "field",
      }),
  },
});
