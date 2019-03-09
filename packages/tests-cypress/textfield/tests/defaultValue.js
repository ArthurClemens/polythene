
export default ({ rootPath, block, h, TextField }) => ({
  path: `${rootPath}/defaultValue`,
  name: "Text Field: defaultValue",
  component: {
    view: () => block([
      h(TextField, {
        testId: "defaultValue",
        defaultValue: "Text",
        key: "field" // for React
      }),
    ])
  }
});
