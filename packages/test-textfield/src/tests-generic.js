import focus from "./components/focus";
import getState from "./components/getState";

export default ({ TextField, RaisedButton, renderer: h, keys: k }) => {

  const block = (test, attrs = {}) =>
    h("div", {
      style: Object.assign(
        {},
        attrs.dark ? null : { background: "#fff" },
        attrs.fullWidth
          ? null
          : { padding: "10px 15px" }
      )},
      test
    );

  TextField.theme(".tests-textfield-themed-textfield", {
    color_light_input_text: "#0D47A1",
    color_light_input_background: "#BBDEFB",
    color_light_focus_border: "#0D47A1",
    input_padding_h: 12
  });

  const ipsum = "Lorem ipsum dolor sit amet, idque signiferumque at usu, eum recusabo aliquando id. Deleniti percipitur concludaturque eu eos. Vix elitr feugait ne. Mel agam integre eu, has minim aliquid salutandi eu. Est nusquam abhorreant ne. Ei wisi dicant eam, vix tota reque persequeris an. Quo in theophrastus reprehendunt, ius te graecis epicuri volutpat.";
  const shortIpsum = "Lorem ipsum dolor sit amet,";
  const Focus = focus({ h, k, TextField, RaisedButton });
  const GetState = getState({ h, k, TextField, RaisedButton });

  return [
    {
      name: "Option: value",
      component: {
        view: () => block([
          h(TextField, {
            value: "Text A",
            key: "a" // for React
          }),
          h(TextField, {
            value: "Text B",
            key: "b" // for React
          })
        ])
      }
    },
    {
      name: "Option: autofocus",
      component: {
        view: () => block([
          h(TextField, {
            [k.autofocus]: true
          })
        ])
      }
    },
    {
      name: "Option: type (password, number, email)",
      component: {
        view: () => block([
          h(TextField, {
            type: "password",
            value: "123456",
            key: "a" // for React
          }),
          h(TextField, {
            type: "number",
            value: "123456",
            key: "b" // for React
          }),
          h(TextField, {
            type: "email",
            value: "a@b.com",
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
      name: "Option: multiline",
      component: {
        view: () => block([
          h(TextField, {
            label: "Label in multi-line input",
            multiline: true,
            rows: 2,
            key: "a" // for React
          }),
          h(TextField, {
            label: "Floating label in multi-line input",
            floatingLabel: true,
            multiline: true,
            rows: 2,
            key: "b" // for React
          }),
          h(TextField, {
            value: "4 rows: " + ipsum,
            multiline: true,
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
            value: "123",
            [k.maxlength]: 3,
            error: "Enter max 3 characters"
          })
        ])
      }
    },
    {
      name: "Option: min, max",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            type: "number",
            min: 3,
            max: 8,
            value: 10,
            error: "Enter a value between 3 and 8",
            required: true
          })
        ])
      }
    },
    {
      name: "Option: type email, required",
      interactive: true,
      component: {
        view: () => block([
          h(TextField, {
            label: "Email",
            type: "email",
            value: "a@",
            required: true,
            error: "Enter a valid email address"
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
            value: "abc",
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
            value: "abC",
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
            value: shortIpsum,
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
            value: shortIpsum,
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
      name: "Option: getState",
      interactive: true,
      component: {
        view: () => block(
          h(GetState)
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
            value: "John",
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
            value: "John",
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
            value: "a@",
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
            value: "John",
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
            value: "John",
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

