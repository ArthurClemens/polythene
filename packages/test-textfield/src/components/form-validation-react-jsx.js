import React, { Component } from "react";
import { Form, Field, ValidationError } from "powerform";
import { TextField, Button } from "polythene-react";

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

class FormUI extends Component {

  constructor() {
    super();
    const data = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.form = SignupForm.new({
      onChange: data => {
        this.setState({ data: data });
      },
      onError: error => {
        this.setState({ error: error });
      },
      data: data
    });
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

  render() {
    const { username, password, confirmPassword } = this.form;
    const errors = this.form.getError();
    const form = (
      <form
        onSubmit={this.submit.bind(this)}
        noValidate
        autoComplete="off"
      >
        <h3>Sign up</h3>
        <TextField
          name="username"
          floatingLabel
          value={username.getData()}
          events={{
            onInput: e => (
              username.setData(e.target.value),
              this.submitFailed && e.target.value.length && checkUserAvailability(e.target.value, username)
            )
          }}
          required
          valid={!errors.username}
          error={errors.username}
          label="Your name"
          help={`Use '${TEST_USER_NAME}' to test username check`}
        />
        <TextField
          name="password"
          floatingLabel
          value={password.getData()}
          events={{
            onInput: e => (
              password.setData(e.target.value),
              this.submitFailed && e.target.value.length && password.isValid()
            )
          }}
          required
          valid={!errors.password}
          error={errors.password}
          label="Your password"
          type="password"
        />
        <TextField
          name="confirmPassword"
          floatingLabel
          value={confirmPassword.getData()}
          events={{
            onInput: e => (
              confirmPassword.setData(e.target.value),
              this.submitFailed && e.target.value.length && confirmPassword.isValid()
            )
          }}
          required
          valid={!errors.confirmPassword}
          error={errors.confirmPassword}
          label="Confirm your password"
          type="password"
        />
        <Button
          raised
          element="button"
          type="submit"
          label="Send"
          disabled={this.submitFailed && !this.form.isValid(true)}
        />
      </form>
    );
    const feedback = <h3>You're done!</h3>;
    return this.submitted
      ? feedback
      : form;
  }
}

export default FormUI;

