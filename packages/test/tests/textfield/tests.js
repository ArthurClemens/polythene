import m from "mithril";
import textfield from "polythene-textfield";
import button from "polythene-raised-button";

textfield.theme(".tests-textfield-themed-textfield", {
  color_light_input_text: "#0D47A1",
  color_light_input_background: "#BBDEFB",
  color_light_focus_border: "#0D47A1",
  input_padding_h: 16
});

const ipsum = "Lorem ipsum dolor sit amet, idque signiferumque at usu, eum recusabo aliquando id. Deleniti percipitur concludaturque eu eos. Vix elitr feugait ne. Mel agam integre eu, has minim aliquid salutandi eu. Est nusquam abhorreant ne. Ei wisi dicant eam, vix tota reque persequeris an. Quo in theophrastus reprehendunt, ius te graecis epicuri volutpat.";

const shortIpsum = "Lorem ipsum dolor sit amet,";

const block = (test, opts = {}) => m("div", {
  style: Object.assign(
    {},
    opts.dark ? null : { background: "#fff" },
    opts.fullWidth
      ? null
      : { padding: "10px 15px" }
  )}, test);

export const tests = [
  {
    name: "Option: value",
    component: {
      view: () => block([
        m(textfield, {
          value: "Text A"
        }),
        m(textfield, {
          value: "Text B"
        })
      ])
    }
  },
  {
    name: "Option: autofocus",
    component: {
      view: () => block([
        m(textfield, {
          autofocus: true
        })
      ])
    }
  },
  {
    name: "Option: type (password, number, email)",
    component: {
      view: () => block([
        m(textfield, {
          type: "password",
          value: "123456"
        }),
        m(textfield, {
          type: "number",
          value: "123456"
        }),
        m(textfield, {
          type: "email",
          value: "a@b.com"
        })
      ])
    }
  },
  {
    name: "Option: label",
    component: {
      view: () => block([
        m(textfield, {
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
        m(textfield, {
          label: "Your name",
          floatingLabel: true
        }),
        m(textfield, {
          label: "Your email",
          floatingLabel: true
        }),
        m(textfield, {
          label: "Your address",
          floatingLabel: true
        })
      ])
    }
  },
  {
    name: "Option: floatingLabel, dense",
    component: {
      view: () => block([
        m(textfield, {
          label: "Your name",
          floatingLabel: true,
          dense: true
        }),
        m(textfield, {
          label: "Your email",
          floatingLabel: true,
          dense: true
        }),
        m(textfield, {
          label: "Your address",
          floatingLabel: true,
          dense: true
        })
      ])
    }
  },
  {
    name: "Option: help",
    component: {
      view: () => block([
        m(textfield, {
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
        m(textfield, {
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
      view: () => block([
        m(textfield, {
          label: "Your name",
          fullWidth: true
        }),
        m(textfield, {
          label: "Your email",
          fullWidth: true
        }),
        m(textfield, {
          label: "Your address",
          fullWidth: true
        })
      ], {fullWidth: true})
    }
  },
  {
    name: "Option: multiline",
    component: {
      view: () => block([
        m(textfield, {
          label: "Label in multi-line input",
          multiline: true,
          rows: 2
        }),
        m(textfield, {
          label: "Floating label in multi-line input",
          floatingLabel: true,
          multiline: true,
          rows: 2
        }),
        m(textfield, {
          value: "4 rows: " + ipsum,
          multiline: true,
          rows: 4
        })
      ])
    }
  },
  {
    name: "Option: required",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
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
        m(textfield, {
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
        m(textfield, {
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
        m(textfield, {
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
        m(textfield, {
          label: "Your name",
          floatingLabel: true,
          help: "Enter the name as written on the credit card",
          required: true,
          requiredIndicator: m("small", {style: {color: "#333"}}, "this field is required")
        })
      ])
    }
  },
  {
    name: "Option: optionalIndicator (string)",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
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
        m(textfield, {
          label: "Your name",
          floatingLabel: true,
          optionalIndicator: m("small", {style: {color: "#333"}}, "this field is optional")
        })
      ])
    }
  },
  {
    name: "Option: required, floatingLabel, empty requiredIndicator",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
          label: "Floating label in multi-line input",
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
    name: "Option: maxLength",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
          value: "123",
          maxlength: 3,
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
        m(textfield, {
          type: "number",
          min: 3,
          max: 8,
          value: 10,
          error: "Enter a value between 3 and 8"
        })
      ])
    }
  },
  {
    name: "Option: type email, required",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
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
    name: "Option: pattern, validateAtStart",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
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
    name: "Custom validation",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
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
        m(textfield, {
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
    name: "Option: counter, maxlength",
    interactive: true,
    component: {
      view: () => block([
        m(textfield, {
          label: "Description",
          floatingLabel: true,
          value: shortIpsum,
          counter: 30,
          maxlength: 30
        })
      ])
    }
  },
  {
    name: "Give focus",
    interactive: true,
    component: {
      view: vnode => block([
        m(textfield, {
          label: "Your name",
          focus: vnode.state.hasFocus,
          getState: focusState => vnode.state.hasFocus = focusState.focus
        }),
        m(button, {
          label: "Give focus",
          raised: true,
          events: {
            onclick: () => vnode.state.hasFocus = true
          }
        })
      ])
    }
  },
  {
    name: "Set value from outside",
    interactive: true,
    component: {
      value: "00000",
      view: vnode => block([
        m(textfield, {
          value: () => vnode.state.value,
          getState: state => vnode.state.value = state.value
        }),
        m(button, {
          label: "Randomize",
          raised: true,
          events: {
            onclick: () => vnode.state.value = Math.floor(Math.random() * 100000)
          }
        })
      ])
    }
  },
  {
    name: "Option: disabled (label)",
    component: {
      view: () => block([
        m(textfield, {
          label: "Your name",
          disabled: true
        })
      ])
    }
  },
  {
    name: "Option: disabled (input)",
    component: {
      view: () => block([
        m(textfield, {
          value: "John",
          disabled: true
        })
      ])
    }
  },
  {
    name: "Option: readonly",
    component: {
      view: () => block([
        m(textfield, {
          value: "John",
          readonly: true
        })
      ])
    }
  },
  {
    name: "Themed",
    component: {
      view: () => block([
        m(textfield, {
          label: "Your name",
          class: "tests-textfield-themed-textfield"
        })
      ])
    }
  },

  /* Dark theme */

  {
    name: "Option: label -- dark theme",
    class: "pe-dark-theme",
    component: {
      view: () => block([
        m(textfield, {
          label: "Your Name",
        })
      ], {dark: true})
    }
  },
  {
    name: "Option: floatingLabel -- dark theme",
    interactive: true,
    class: "pe-dark-theme",
    component: {
      view: () => block([
        m(textfield, {
          label: "Your name",
          floatingLabel: true
        }),
        m(textfield, {
          label: "Your email",
          floatingLabel: true
        }),
        m(textfield, {
          label: "Your address",
          floatingLabel: true
        })
      ], {dark: true})
    }
  },
  {
    name: "Option: type email, required -- dark theme",
    interactive: true,
    class: "pe-dark-theme",
    component: {
      view: () => block([
        m(textfield, {
          label: "Email",
          type: "email",
          value: "a@",
          required: true,
          error: "Enter a valid email address"
        })
      ], {dark: true})
    }
  },
  {
    name: "Option: disabled (input) -- dark theme",
    class: "pe-dark-theme",
    component: {
      view: () => block([
        m(textfield, {
          value: "John",
          disabled: true
        })
      ], {dark: true})
    }
  },{
    name: "Option: readonly -- dark theme",
    class: "pe-dark-theme",
    component: {
      view: () => block([
        m(textfield, {
          value: "John",
          readonly: true
        })
      ], {dark: true})
    }
  }
];

