import { sectionKeys } from "../constants";
import { ipsum } from "../../../tests-cypress-specs/constants";

export default ({ fromPolythene: { TextField, Button }, h, a }) => ({
  [sectionKeys.attributes]: [
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
      name: "autoFocus",
      component: {
        view: () =>
          h(TextField, {
            [a.autofocus]: true,
            value: "autofocus",
            testId: "textfield-autofocus",
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
      name: "value",
      component: {
        view: () =>
          h(TextField, {
            value: "Def",
            testId: "textfield-value",
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
          h(
            "form",
            {},
            h(TextField, {
              defaultValue: "777",
              type: "password",
              testId: "textfield-type-password",
            })
          ),
      },
    },
    {
      name: "label",
      component: {
        view: () =>
          h(TextField, {
            label: "Your Name",
            testId: "textfield-label",
          }),
      },
    },
    {
      name: "floatingLabel",
      component: {
        view: () =>
          h(TextField, {
            label: "Your Name",
            floatingLabel: true,
            testId: "textfield-floatingLabel",
          }),
      },
    },
    {
      name: "floatingLabel, dense",
      component: {
        view: () =>
          h(TextField, {
            label: "Your Name",
            floatingLabel: true,
            dense: true,
            testId: "textfield-floatingLabel-dense",
          }),
      },
    },
    {
      name: "multiLine",
      component: {
        view: () =>
          h(TextField, {
            label: "Label in multi-line input",
            multiLine: true,
            rows: 3,
            defaultValue: ipsum,
            testId: "textfield-multiLine",
          }),
      },
    },
    {
      name: "multiLine, floatingLabel",
      component: {
        view: () =>
          h(TextField, {
            label: "Floating label in multi-line input",
            floatingLabel: true,
            multiLine: true,
            rows: 3,
            defaultValue: ipsum,
            testId: "textfield-multiLine-floatingLabel",
          }),
      },
    },
    {
      name: "help",
      component: {
        view: () =>
          h(TextField, {
            label: "Your name",
            help: "Enter the name as written on the credit card",
            testId: "textfield-help",
          }),
      },
    },
    {
      name: "focusHelp",
      component: {
        view: () =>
          h(TextField, {
            label: "Your name",
            help: "Enter the name as written on the credit card",
            focusHelp: true,
            testId: "textfield-focusHelp",
          }),
      },
    },
  ],
  [sectionKeys.aria]: [
    {
      name: "aria: role",
      component: {
        view: () =>
          h(TextField, {
            aria: {
              role: "textbox",
            },
            testId: "textfield-aria",
          }),
      },
    },
    {
      name: "aria: aria-label",
      component: {
        view: () =>
          h(TextField, {
            aria: {
              "aria-label": "Search",
            },
            testId: "textfield-aria-label",
          }),
      },
    },
    {
      name: "aria: aria-labelledby",
      component: {
        view: () =>
          h("div", { "data-test-id": "textfield-aria-labelledby-container" }, [
            h(TextField, {
              key: "field",
              aria: {
                "aria-labelledby": "button-ref-123",
              },
              testId: "textfield-aria-labelledby",
            }),
            h(Button, {
              key: "button",
              label: "Search",
              element: "button",
              contained: true,
              id: "button-ref-123",
            }),
          ]),
      },
    },
  ],
  [sectionKeys.common]: [
    {
      name: "dataSet",
      component: {
        view: () =>
          h(TextField, {
            label: "User",
            dataSet: {
              user: "123",
            },
            testId: "textfield-dataSet",
          }),
      },
    },
  ],
});

// TODO
// fullWidth
// required
// required, hideValidation
// required, floatingLabel
// required, floatingLabel, requiredIndicator (string)
// required, floatingLabel, requiredIndicator (element)
// optionalIndicator (string)
// optionalIndicator (element)
// required, floatingLabel, empty requiredIndicator
// maxlength
// min, max, validateAtStart
// type email, required, validateAtStart
// pattern [0-9]+, validateAtStart
// validation (only use lowercase characters)
// counter
// counter, maxlength
// events
// give focus
// onChange
// set value
// disabled (label)
// disabled (input)
// readonly
// style
// theme
// rtl
