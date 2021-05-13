export default ({ rootPath, a, h, Switch }) => ({
  path: rootPath,
  name: "Switch",
  component: {
    view: () => [
      // default
      h(
        "div",
        { key: "switch-default" },
        h(Switch, {
          testId: "switch-default",
        })
      ),

      // name
      h(
        "div",
        { key: "switch-name" },
        h(Switch, {
          name: "some-name",
          testId: "switch-name",
        })
      ),

      // value
      h(
        "div",
        { key: "switch-value" },
        h(Switch, {
          value: "some-value",
          testId: "switch-value",
        })
      ),

      // label
      h(
        "div",
        { key: "switch-label" },
        h(Switch, {
          label: "label",
          testId: "switch-label",
        })
      ),

      // defaultChecked
      h(
        "div",
        { key: "switch-defaultChecked" },
        h(Switch, {
          defaultChecked: true,
          testId: "switch-defaultChecked",
        })
      ),

      // disabled
      h(
        "div",
        { key: "switch-disabled" },
        h(Switch, {
          disabled: true,
          testId: "switch-disabled",
        })
      ),

      // onclick
      h(
        "div",
        { key: "switch-onclick" },
        h(Switch, {
          events: {
            [a.onclick]: () => console.log("onclick"),
          },
          testId: "switch-onclick",
        })
      ),
    ],
  },
});
