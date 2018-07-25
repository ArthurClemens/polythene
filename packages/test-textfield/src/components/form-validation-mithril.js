import m from "mithril";
import { Form, Field, ValidationError } from "powerform";
import { TextField, Button } from "polythene-mithril";

const TEST_USER_NAME = "ABC";
const MIN_PASSWORD_LENGTH = 3;
const ERROR_MESSAGE_REQUIRED = "This field is required.";
 
class StringField extends Field {
  modify(newVal) {
    if (!newVal) return "";
    return newVal;
  }
}

class UsernameField extends StringField {
  validate(value) {
    if (!value) throw new ValidationError(ERROR_MESSAGE_REQUIRED);
    if (value === TEST_USER_NAME) {
      throw new ValidationError("This username already exists. Please choose a different username.");
    }
  }
}

class PasswordField extends StringField {
  validate(value) {
    if (!value) throw new ValidationError(ERROR_MESSAGE_REQUIRED);
    if (value.length < MIN_PASSWORD_LENGTH) {
      throw new ValidationError(`Your password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
    }
  }
}

class ConfirmPasswordField extends StringField {
  validate(value, allValues) {
    if (!value) throw new ValidationError(ERROR_MESSAGE_REQUIRED);
    if (value !== allValues[this.config.field]) {
      throw new ValidationError("This does't match your first password.");
    }
  }
}

const checkUserAvailability = (value, field) => {
  if (value !== "" && value === TEST_USER_NAME) {
    field.setError("This username already exists. Please choose a different username.");
  } else {
    field.setError(undefined);
  }
};

class SignupForm extends Form {
  constructor() {
    super();
    this.username = UsernameField.new();
    this.password = PasswordField.new();
    this.confirmPassword = ConfirmPasswordField.new({ field: "password" });
  } 
}

class FormUI {
  oninit() {
    const data = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.form = SignupForm.new({ data });
    this.submitted = false;
    this.submitFailed = false; // only show errors after having submitted a first time
  }

  submit(e) {
    e.preventDefault();
    if (this.form.isValid()) {
      // Send through API...
      this.submitted = true;
    } else {
      this.submitFailed = true;
    }
  }

  view() {
    const { username, password, confirmPassword } = this.form;
    const errors = this.form.getError();
    const form = m("form",
      {
        onsubmit: this.submit.bind(this),
        novalidate: "novalidate",
        autocomplete: "off"
      },
      m("h3", "Sign up"),
      m(TextField, {
        name: "username",
        floatingLabel: true,
        value: username.getData(),
        events: {
          oninput: e => (
            username.setData(e.target.value),
            this.submitFailed && e.target.value.length && checkUserAvailability(e.target.value, username)
          )
        },
        required: true,
        valid: !errors.username,
        error: errors.username,
        label: "Your name",
        help: `Use '${TEST_USER_NAME}' to test username check`,
      }),
      m(TextField, {
        name: "password",
        floatingLabel: true,
        value: password.getData(),
        events: {
          oninput: e => (
            password.setData(e.target.value),
            this.submitFailed && e.target.value.length && password.isValid()
          )
        },
        required: true,
        valid: !errors.password,
        error: errors.password,
        label: "Your password",
        type: "password",
      }),
      m(TextField, {
        name: "confirmPassword",
        floatingLabel: true,
        value: confirmPassword.getData(),
        events: {
          oninput: e => (
            confirmPassword.setData(e.target.value),
            this.submitFailed && e.target.value.length && confirmPassword.isValid()
          )
        },
        required: true,
        valid: !errors.confirmPassword,
        error: errors.confirmPassword,
        label: "Confirm your password",
        type: "password",
      }),
      m(Button, {
        raised: true,
        element: "button",
        type: "submit",
        label: "Send",
        disabled: this.submitFailed && !this.form.isValid(true)
      })
    );
    const feedback = m("h3", "You're done!");
    return this.submitted
      ? feedback
      : form;
  }
}

export default FormUI;
