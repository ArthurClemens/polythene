import { sectionKeys } from "../constants";

export default ({ fromPolythene: { Switch }, h, a }) => ({
  [sectionKeys.attributes]: [
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
  ],
  [sectionKeys.interactive]: [
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
      name: "onclick",
      component: {
        oninit: ({ state }) => {
          Object.assign(state, {
            clickCount: 0,
          });
        },
        view: ({ state }) =>
          h(Switch, {
            events: {
              [a.onclick]: () => {
                state.clickCount += 1;
              },
            },
            dataSet: {
              clickcount: state.clickCount.toString(),
            },
            testId: "switch-onclick",
          }),
      },
    },
  ],
  [sectionKeys.aria]: [
    {
      name: "aria: role",
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
  ],
  [sectionKeys.common]: [
    {
      name: "dataSet",
      component: {
        view: () =>
          h(Switch, {
            dataSet: {
              user: "123",
            },
            testId: "switch-dataSet",
          }),
      },
    },
  ],
});

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
