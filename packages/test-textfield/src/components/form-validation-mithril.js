import powerform from "powerform";
import { required, equalsTo } from "validatex";

const TEST_USER_NAME = "ABC";

export default ({ h, TextField, RaisedButton }) => ({
  oninit: vnode => {
    Object.assign(vnode.state, {
      form: powerform({
        username: {
          default: "",
          validator: required(true)
        },
        password: {
          default: "",
          validator: required(true)
        },
        confirmPassword: {
          default: "",
          validator: [
            required(true),
            equalsTo("password")
          ]
        }
      }),
      submit: () => {
        vnode.state.submitFailed = false; // reset

        // Immediate frontend validation
        if (!vnode.state.form.isValid()) {
          vnode.state.submitFailed = true;
          return false;
        }

        // Server side validation
        // Send form data to API... but instead we will just show user feedback
        vnode.state.formErrors = []; // reset
        if (vnode.state.form.username() === TEST_USER_NAME) {
          vnode.state.formErrors = [
            "This username already exists. Please choose a different username."
          ];
          vnode.state.form.error({ username: "Choose a different username" });
          vnode.state.submitFailed = true;
          return false;
        } else {          
          vnode.state.submitted = true;
          vnode.state.submitFailed = false;
          return false;
        }
      },
      formErrors: null,
      submitFailed: false,
      submitted: false
    });
  },
  view: ({ state }) => {
    const form = state.form;
    const errors = form.error();
    const submitFailed = state.submitFailed;
    const formErrors = state.formErrors;

    return state.submitted
      ? h("h3", "You're done!")
      : h("form",
        {
          onsubmit: state.submit,
          novalidate: "novalidate",
          autocomplete: "off"
        },
        [
          h("h3", "Sign up"),
          h(TextField, {
            name: "username",
            floatingLabel: true,
            value: form.username(),
            validateOnInput: true,
            required: true,
            valid: !(submitFailed && errors.username !== undefined),
            error: errors.username,
            onChange: ({ value }) => form.username(value),
            label: "Your name",
            help: `Use '${TEST_USER_NAME}' to test form validation`,
          }),
          h(TextField, {
            name: "password",
            floatingLabel: true,
            value: form.password(),
            validateOnInput: true,
            required: true,
            valid: !(submitFailed && errors.password !== undefined),
            error: errors.password,
            onChange: ({ value }) => form.password(value),
            label: "Your password",
            type: "password",
          }),
          h(TextField, {
            name: "confirmPassword",
            floatingLabel: true,
            value: form.confirmPassword(),
            validateOnInput: true,
            required: true,
            valid: !(submitFailed && errors.confirmPassword !== undefined),
            error: errors.confirmPassword,
            onChange: ({ value }) => form.confirmPassword(value),
            label: "Confirm your password",
            type: "password",
          }),
          // Form submit error message
          formErrors
            ? h("div",
              {
                style: {
                  margin: "1rem 0",
                  padding: "1rem",
                  background: "#ffcdd2"
                }
              },
              h("div", formErrors.map(err => h("div", err)))
            )
            : null,
          h(RaisedButton, {
            element: "button",
            type: "submit",
            label: "Send"
          })
        ]
      );
  }
});

