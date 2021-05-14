export default ({ a, h, Button }) => [
  {
    section: "Button",
  },
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
    name: "element",
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
    name: "aria",
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
    name: "disabled",
    component: {
      view: () =>
        h(Button, {
          label: "disabled",
          disabled: true,
          testId: "button-disabled",
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
          label: "type",
          type: "submit",
          testId: "button-type",
        }),
    },
  },
  {
    name: "formAction",
    component: {
      view: () =>
        h(
          "form",
          {
            key: "button-formAction",
            action: "/default",
            method: "GET",
          },
          h(Button, {
            label: "formAction",
            [a.formaction]: "/#",
            element: "button",
            type: "submit",
            testId: "button-formAction",
          })
        ),
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
];
