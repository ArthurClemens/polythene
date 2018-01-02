import React, { Component } from "react";
import powerform from "powerform";
import { required, equalsTo } from "validatex";
import { TextField, RaisedButton } from "polythene-react";

const TEST_USER_NAME = "ABC";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      submit: e => {
        e.preventDefault();
        // Immediate frontend validation
        const isValid = this.state.form.isValid();
        if (!isValid) {
          this.setState({ submitFailed: !isValid });
          return false;
        }

        // Server side validation
        // Send form data to API... but instead we will just show user feedback
        if (this.state.form.username() === TEST_USER_NAME) {
          this.state.form.error({ username: "Choose a different username" });
          this.setState({
            formErrors: [
              "This username already exists. Please choose a different username."
            ],
            submitFailed: true
          });
          return false;
        } else {    
          this.setState({
            submitted: true,
            submitFailed: false,
            formErrors: []
          });
          return false;
        }
      },
      formErrors: null,
      submitFailed: false,
      submitted: false
    };
  }

  render() {
    const form = this.state.form;
    const errors = form.error();
    const submitFailed = this.state.submitFailed;
    const formErrors = this.state.formErrors;

    return this.state.submitted
      ? <h3>You're done!</h3>
      : <form
        onSubmit={this.state.submit}
        noValidate
        autoComplete="off"
      >
        <h3>Sign up</h3>
        <TextField
          name="username"
          defaultValue={form.username()}
          floatingLabel
          validateOnInput
          required
          valid={!(submitFailed && errors.username !== undefined)}
          error={errors.username}
          onChange={({ value }) => (
            form.username(value)
          )}
          label="Your name"
          help={`Use '${TEST_USER_NAME}' to test form validation`}
        />
        <TextField
          name="password"
          defaultValue={form.password()}
          floatingLabel
          validateOnInput
          required
          valid={!(submitFailed && errors.password !== undefined)}
          error={errors.password}
          onChange={({ value }) => (
            form.password(value)
          )}
          label="Your password"
          type="password"
        />
        <TextField
          name="confirmPassword"
          defaultValue={form.confirmPassword()}
          floatingLabel
          validateOnInput
          required
          valid={!(submitFailed && errors.confirmPassword !== undefined)}
          error={errors.confirmPassword}
          onChange={({ value }) => (
            form.confirmPassword(value)
          )}
          label="Confirm your password"
          type="password"
        />
        {formErrors
          ? <div
            style={{
              margin: "1rem 0",
              padding: "1rem",
              background: "#ffcdd2"
            }}
          >
            <div>{formErrors.map((err, index) => <div key={index}>{err}</div>)}</div>
          </div>
          : null
        }
        <RaisedButton
          element="button"
          type="submit"
          label="Send"
        />
      </form>;
  }
}
