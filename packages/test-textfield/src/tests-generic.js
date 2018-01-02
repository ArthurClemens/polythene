import focus from "./components/focus";
import onChange from "./components/onChange";
import setValue from "./components/set-value";
import { TextFieldCSS } from "polythene-css";

export default ({ TextField, RaisedButton, renderer: h, keys: k }) => {

  const block = (test, attrs = {}) =>
    h("div",
      {
        style: Object.assign(
          {},
          attrs.dark ? null : { background: "#fff" },
          attrs.fullWidth
            ? null
            : { padding: "10px 15px" }
        )
      },
      test
    );

  TextFieldCSS.addStyle(".tests-textfield-themed-textfield", {
    color_light_input_text: "#0D47A1",
    color_light_input_background: "#BBDEFB",
    color_light_focus_border: "#0D47A1",
    input_padding_h: 12
  });

  const ipsum = "Lorem ipsum dolor sit amet, idque signiferumque at usu, eum recusabo aliquando id. Deleniti percipitur concludaturque eu eos. Vix elitr feugait ne. Mel agam integre eu, has minim aliquid salutandi eu. Est nusquam abhorreant ne. Ei wisi dicant eam, vix tota reque persequeris an. Quo in theophrastus reprehendunt, ius te graecis epicuri volutpat.";
  const shortIpsum = "Lorem ipsum dolor sit amet,";
  const Focus = focus({ h, k, TextField, RaisedButton });
  const OnChange = onChange({ h, k, TextField, RaisedButton });
  const SetValue = setValue({ h, k, TextField, RaisedButton });
  
  return [
    {
      name: "Option: defaultValue",
      component: {
        view: () => block([
          h(TextField, {
            defaultValue: "Text A",
            key: "a" // for React
          }),
          h(TextField, {
            defaultValue: "Text B",
            key: "b" // for React
          })
        ])
      }
    },
    {
      name: "Option: autofocus (does not work on iOS)",
      component: {
        view: () => block([
          h(TextField, {
            [k.autofocus]: true
          })
        ])
      }
    },
    {
      name: "Option: type (password (not shown), number, email)",
      component: {
        view: () => block([
          // Note that having a password field in a form will kick in form autocomplete
          h(TextField, {
            type: "password",
            defaultValue: "123456",
            key: "a" // for React
          }),
          h(TextField, {
            type: "number",
            defaultValue: "123456",
            key: "b" // for React
          }),
          h(TextField, {
            type: "email",
            defaultValue: "a@b.com",
            key: "c" // for React
          })
        ])
      }
    },
    {
      name: "Option: label",
      component: {
        view: () => block([
          h(TextField, {
            label: "Your Name",
          })
        ])
      }
    },
    {
      name: "Option: floatingLabel",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            key: "a" // for React
          }),
          h(TextField, {
            label: "Your email",
            floatingLabel: true,
            key: "b" // for React
          }),
          h(TextField, {
            label: "Your address",
            floatingLabel: true,
            key: "c" // for React
          })
        ])
      }
    },
    {
      name: "Option: floatingLabel, dense",
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            dense: true,
            key: "a" // for React
          }),
          h(TextField, {
            label: "Your email",
            floatingLabel: true,
            dense: true,
            key: "b" // for React
          }),
          h(TextField, {
            label: "Your address",
            floatingLabel: true,
            dense: true,
            key: "c" // for React
          })
        ])
      }
    },
    {
      name: "Option: help",
      component: {
        view: () => block([
          h(TextField, {
            label: "Your Name",
            help: "Enter the name as written on the credit card"
          })
        ])
      }
    },
    {
      name: "Option: focusHelp",
      component: {
        view: () => block([
          h(TextField, {
            label: "Your Name",
            help: "Enter the name as written on the credit card",
            focusHelp: true
          })
        ])
      }
    },
    {
      name: "Option: fullWidth",
      component: {
        view: () => block(
          [
            h(TextField, {
              label: "Your name",
              fullWidth: true,
              key: "a" // for React
            }),
            h(TextField, {
              label: "Your email",
              fullWidth: true,
              key: "b" // for React
            }),
            h(TextField, {
              label: "Your address",
              fullWidth: true,
              key: "c" // for React
            })
          ],
          { fullWidth: true }
        )
      }
    },
    {
      name: "Option: multiLine",
      component: {
        view: () => block([
          h(TextField, {
            label: "Label in multi-line input",
            multiLine: true,
            rows: 2,
            key: "a" // for React
          }),
          h(TextField, {
            label: "Floating label in multi-line input",
            floatingLabel: true,
            multiLine: true,
            rows: 2,
            key: "b" // for React
          }),
          h(TextField, {
            defaultValue: "4 rows: " + ipsum,
            multiLine: true,
            rows: 4,
            key: "c" // for React
          })
        ])
      }
    },
    {
      name: "Option: required",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            help: "Enter the name as written on the credit card",
            required: true
          })
        ])
      }
    },
    {
      name: "Option: required, hideValidation",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            help: "Enter the name as written on the credit card",
            required: true,
            hideValidation: true
          })
        ])
      }
    },
    {
      name: "Option: required, floatingLabel",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            help: "Enter the name as written on the credit card",
            required: true
          })
        ])
      }
    },
    {
      name: "Option: required, floatingLabel, requiredIndicator (string)",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            help: "Enter the name as written on the credit card",
            required: true,
            requiredIndicator: "(required)"
          })
        ])
      }
    },
    {
      name: "Option: required, floatingLabel, requiredIndicator (element)",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            help: "Enter the name as written on the credit card",
            required: true,
            requiredIndicator: h("span",
              { style: {color: "#333"} },
              "this field is required"
            )
          })
        ])
      }
    },
    {
      name: "Option: optionalIndicator (string)",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            optionalIndicator: "(optional)"
          })
        ])
      }
    },
    {
      name: "Option: optionalIndicator (element)",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            optionalIndicator: h("span",
              { style: {color: "#333"} },
              "this field is optional"
            )
          })
        ])
      }
    },
    {
      name: "Option: required, floatingLabel, empty requiredIndicator",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Floating label",
            floatingLabel: true,
            help: "This required field does not show a *",
            error: "Please enter your name",
            focusHelp: true,
            required: true,
            requiredIndicator: ""
          }),
        ])
      }
    },
    {
      name: `Option: ${[k.maxlength]}`,
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            defaultValue: "123",
            [k.maxlength]: 3,
            error: "Enter max 3 characters"
          })
        ])
      }
    },
    {
      name: "Option: min, max, validateAtStart",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            type: "number",
            min: 3,
            max: 8,
            defaultValue: 10,
            error: "Enter a value between 3 and 8",
            required: true,
            validateAtStart: true
          })
        ])
      }
    },
    {
      name: "Option: type email, required, validateAtStart",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Email",
            type: "email",
            defaultValue: "a@",
            required: true,
            error: "Enter a valid email address",
            validateAtStart: true
          })
        ])
      }
    },
    {
      name: "Option: pattern [0-9]+, validateAtStart",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Number",
            type: "text",
            defaultValue: "abc",
            pattern: "[0-9]+",
            validateAtStart: true
          })
        ])
      }
    },
    {
      name: "Custom validation (only use lowercase characters)",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            defaultValue: "abC",
            validate: value => 
              value !== value.toLowerCase()
                ? ({
                  valid: false,
                  error: "Only use lowercase characters."
                })
                : null,
            validateAtStart: true
          })
        ])
      }
    },
    {
      name: "Option: counter",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Description",
            floatingLabel: true,
            defaultValue: shortIpsum,
            counter: 30,
            error: "You have exceeded the maximum number of characters."
          })
        ])
      }
    },
    {
      name: `Option: counter, ${[k.maxlength]}`,
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Description",
            floatingLabel: true,
            defaultValue: shortIpsum,
            counter: 30,
            [k.maxlength]: 30
          })
        ])
      }
    },
    {
      name: "Give focus",
      interactive: true,
      component: {
        view: () => block(
          h(Focus)
        )
      }
    },
    {
      name: "Option: onChange",
      interactive: true,
      component: {
        view: () => block(
          h(OnChange)
        )
      }
    },
    {
      name: "Set value",
      interactive: true,
      excluded: true,
      component: {
        view: () => block(
          h(SetValue)
        )
      }
    },
    {
      name: "Option: disabled (label)",
      component: {
        view: () => block(
          h(TextField, {
            label: "Your name",
            disabled: true
          })
        )
      }
    },
    {
      name: "Option: disabled (input)",
      component: {
        view: () => block(
          h(TextField, {
            defaultValue: "John",
            disabled: true
          })
        )
      }
    },
    {
      name: `Option: ${[k.readonly]}`,
      component: {
        view: () => block(
          h(TextField, {
            defaultValue: "John",
            [k.readonly]: true
          })
        )
      }
    },
    {
      name: "Themed",
      component: {
        view: () => 
          h(TextField, {
            label: "Your name",
            className: "tests-textfield-themed-textfield"
          })
      }
    },
    {
      name: "Option: style",
      component: {
        view: () => 
          h(TextField, {
            label: "Your name",
            style: {
              background: "#2196F3"
            }
          })
      }
    },
    // {
    //   name: "Autocomplete form",
    //   component: {
    //     view: () => 
    //       h("form",
    //         { [k["autocomplete"]]: "on" }, 
    //         h("div",
    //           {
    //             label: "Customer information"
    //           },
    //           [
    //             h(TextField, {
    //               type:               "email",
    //               label:              "Email",
    //               floatingLabel:      true,
    //             }),
    //             h(TextField, {
    //               label:               "First name",
    //               floatingLabel:      true,
    //             }),
    //             h(TextField, {
    //               label:               "Last name",
    //               floatingLabel:      true,
    //             }),
    //           ]
    //         )
    //       )
    //   }
    // },

    /* Dark tone */

    {
      name: "Option: label -- dark theme class",
      className: "pe-dark-tone",
      component: {
        view: () => block(
          h(TextField, {
            label: "Your Name",
          }), {dark: true})
      }
    },
    {
      name: "Option: floatingLabel -- dark theme class",
      interactive: true,
      className: "pe-dark-tone",
      component: {
        view: () => block([
          h(TextField, {
            label: "Your name",
            floatingLabel: true,
            key: "a" // for React
          }),
          h(TextField, {
            label: "Your email",
            floatingLabel: true,
            key: "b" // for React
          }),
          h(TextField, {
            label: "Your address",
            floatingLabel: true,
            key: "c" // for React
          })], { dark: true })
      }
    },
    {
      name: "Option: type email, required -- dark theme class",
      interactive: true,
      className: "pe-dark-tone",
      component: {
        view: () => block(
          h(TextField, {
            label: "Email",
            type: "email",
            defaultValue: "a@",
            required: true,
            error: "Enter a valid email address"
          }), {dark: true})
      }
    },
    {
      name: "Option: disabled (input) -- dark theme class",
      className: "pe-dark-tone",
      component: {
        view: () => block(
          h(TextField, {
            defaultValue: "John",
            disabled: true
          }), { dark: true })
      }
    },
    {
      name: "Option: readonly -- dark theme class",
      className: "pe-dark-tone",
      component: {
        view: () => block(
          h(TextField, {
            defaultValue: "John",
            readonly: true
          }), { dark: true })
      }
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => block(
          h(TextField, {
            label: "Your Name",
            className: "pe-light-tone"
          })
        )
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () => block(
          h(TextField, {
            label: "Your Name",
            tone: "light"
          })
        )
      }
    },
  ];
};

