export default ({ a, h, Switch }) => [
  {
    section: "Switch",
  },
  {
    name: "default",
    component: {
      view: () =>
        h(Switch, {
          testId: "switch-default",
        }),
    },
  },
  {
    name: "name",
    component: {
      view: () =>
        h(Switch, {
          name: "some-name",
          testId: "switch-name",
        }),
    },
  },
  {
    name: "value",
    component: {
      view: () =>
        h(Switch, {
          value: "some-value",
          testId: "switch-value",
        }),
    },
  },
  {
    name: "label",
    component: {
      view: () =>
        h(Switch, {
          label: "label",
          testId: "switch-label",
        }),
    },
  },
  {
    name: "defaultChecked",
    component: {
      view: () =>
        h(Switch, {
          defaultChecked: true,
          testId: "switch-defaultChecked",
        }),
    },
  },
  {
    name: "disabled",
    component: {
      view: () =>
        h(Switch, {
          disabled: true,
          testId: "switch-disabled",
        }),
    },
  },
  {
    name: "aria",
    component: {
      view: () =>
        h(Switch, {
          aria: {
            role: "button",
          },
          testId: "switch-aria",
        }),
    },
  },
  {
    name: "onclick",
    component: {
      view: () =>
        h(Switch, {
          events: {
            [a.onclick]: () => console.log("onclick"),
          },
          testId: "switch-onclick",
        }),
    },
  },

  // TODO:
  // size
  // icon
  // selectable
  // iconButton
  // shadowDepthOff
  // onChange
  // events
  // Setting the checked state
  // style
  // theme
  // rtl
];
