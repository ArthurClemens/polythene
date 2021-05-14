export default ({ a, h, TextField }) => [
  {
    section: "TextField",
  },
  {
    name: "default",
    component: {
      view: () =>
        h(TextField, {
          testId: "textfield-default",
        }),
    },
  },
  {
    name: "defaultValue",
    component: {
      view: () =>
        h(TextField, {
          defaultValue: "Abc",
          testId: "textfield-defaultValue",
        }),
    },
  },
  {
    name: "type email",
    component: {
      view: () =>
        h(TextField, {
          defaultValue: "a@bc",
          type: "email",
          testId: "textfield-type-email",
        }),
    },
  },
  {
    name: "type number",
    component: {
      view: () =>
        h(TextField, {
          defaultValue: "123",
          type: "number",
          testId: "textfield-type-number",
        }),
    },
  },
  {
    name: "type password",
    component: {
      view: () =>
        h(TextField, {
          defaultValue: "777",
          type: "password",
          testId: "textfield-type-password",
        }),
    },
  },

  // Broken:
  // {
  //   name: "autoFocus",
  //   component: {
  //     view: () =>
  //       h(TextField, {
  //         [a.autofocus]: true,
  //         testId: "textfield-autoFocus",
  //       }),
  //   },
  // },
];
