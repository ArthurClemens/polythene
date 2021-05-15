import { volumeIconSVG, sectionKeys } from "../constants";

export default ({ a, h, fromPolythene: { Button, Icon } }) => ({
  [sectionKeys.attributes]: [
    {
      name: "default",
      component: {
        view: () =>
          h(Button, {
            label: "default",
            testId: "button-default",
          }),
      },
    },
    {
      name: "element: button",
      component: {
        view: () =>
          h(Button, {
            label: "element",
            element: "button",
            testId: "button-element",
          }),
      },
    },
    {
      name: "content",
      component: {
        view: () =>
          h(Button, {
            content: "content",
            testId: "button-content",
          }),
      },
    },
    {
      name: "border",
      component: {
        view: () =>
          h(Button, {
            label: "border",
            border: true,
            testId: "button-border",
          }),
      },
    },
    {
      name: "contained",
      component: {
        view: () =>
          h(Button, {
            label: "contained",
            contained: true,
            testId: "button-contained",
          }),
      },
    },
    {
      name: "raised",
      component: {
        view: () =>
          h(Button, {
            label: "raised",
            raised: true,
            testId: "button-raised",
          }),
      },
    },
    {
      name: "raised shadowDepth",
      component: {
        view: () =>
          h(Button, {
            label: "raised",
            raised: true,
            shadowDepth: 2,
            testId: "button-raised-shadowDepth",
          }),
      },
    },
    {
      name: "dropdown",
      component: {
        view: () =>
          h(Button, {
            label: "dropdown",
            dropdown: true,
            testId: "button-dropdown",
          }),
      },
    },
    {
      name: "dropdown open",
      component: {
        view: () =>
          h(Button, {
            label: "dropdown.open",
            dropdown: {
              open: true,
            },
            testId: "button-dropdown-open",
          }),
      },
    },
    {
      name: "extraWide",
      component: {
        view: () =>
          h(Button, {
            label: "extraWide",
            extraWide: true,
            testId: "button-extraWide",
          }),
      },
    },
    {
      name: "type submit",
      component: {
        view: () =>
          h(Button, {
            label: "Submit",
            type: "submit",
            testId: "button-type",
          }),
      },
    },
    {
      name: "highLabel",
      component: {
        view: () =>
          h(Button, {
            label: "highLabel",
            highLabel: true,
            testId: "button-highLabel",
          }),
      },
    },
    {
      name: "inactivate",
      component: {
        view: () =>
          h(Button, {
            label: "inactivate",
            inactivate: 1,
            testId: "button-inactivate",
          }),
      },
    },
    {
      name: "ink false",
      component: {
        view: () =>
          h(Button, {
            label: "no ink",
            ink: false,
            testId: "button-no-ink",
          }),
      },
    },
    {
      name: "wash false",
      component: {
        view: () =>
          h(Button, {
            label: "no wash",
            wash: false,
            testId: "button-no-wash",
          }),
      },
    },
    {
      name: "ripple persistent",
      component: {
        view: () =>
          h(Button, {
            label: "ripple",
            ripple: {
              persistent: true,
              endOpacity: 1,
            },
            testId: "button-ripple",
          }),
      },
    },
    {
      name: "selected",
      component: {
        view: () =>
          h(Button, {
            label: "selected",
            selected: true,
            testId: "button-selected",
          }),
      },
    },
    {
      name: "textStyle",
      component: {
        view: () =>
          h(Button, {
            label: "textStyle",
            textStyle: {
              color: "red",
            },
            testId: "button-textStyle",
          }),
      },
    },
    {
      name: "url",
      component: {
        view: () =>
          h(Button, {
            label: "url",
            url: {
              href: "/",
            },
            testId: "button-url",
          }),
      },
    },
  ],
  [sectionKeys.aria]: [
    {
      name: "aria: role",
      component: {
        view: () =>
          h(Button, {
            label: "aria",
            aria: {
              role: "link",
            },
            testId: "button-aria",
          }),
      },
    },
  ],
  [sectionKeys.common]: [
    {
      name: "before",
      component: {
        view: () =>
          h(Button, {
            label: "Button",
            before: h(Icon, {
              svg: { content: h.trust(volumeIconSVG) },
            }),
            className: "align-items-center",
            testId: "button-before",
          }),
      },
    },
    {
      name: "after",
      component: {
        view: () =>
          h(Button, {
            label: "Button",
            after: h(Icon, {
              svg: { content: h.trust(volumeIconSVG) },
            }),
            className: "align-items-center",
            testId: "button-after",
          }),
      },
    },
    {
      name: "dataSet",
      component: {
        view: () =>
          h(Button, {
            label: "Set user",
            dataSet: {
              user: "123",
            },
            testId: "button-dataSet",
          }),
      },
    },
  ],
});

// {
//   name: "separatorAtStart",
//   component: {
//     view: () =>
//       h(Button, {
//         label: "separatorAtStart",
//         separatorAtStart: true,
//         testId: "button-separatorAtStart",
//         key: "button-separatorAtStart",
//       }),
//   },
// },
