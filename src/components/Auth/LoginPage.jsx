import { Auth } from "aws-amplify";
import React, { Component } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ConfirmationForm from "./ConfirmationForm";
import { Paper, Container } from "@material-ui/core";

class LoginPage extends Component {
  state = {
    newAccount: false,
    awaitingCode: false,
    username: "",
    password: "",
    email: "",
    confirmedPassword: "",
    errorMsg: "",
    code: ""
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  signIn = event => {
    event.preventDefault();
    console.log("waiting for sign in");
    const { username, password } = this.state;
    Auth.signIn({ username, password })
      .then(({ username }) => {
        console.log(username);
        this.props.authenticateUser(username);
      })
      .catch(error => this.setState({ errorMsg: error.message }));
  };

  signUp = event => {
    event.preventDefault();
    const { username, password, email, confirmedPassword } = this.state;
    console.log(this.state);
    if (password !== confirmedPassword)
      this.setState({ errorMsg: "Passwords don't match" });
    else {
      Auth.signUp({ username, password, attributes: { email } })
        .then(() => this.setState({ awaitingCode: true }))
        .catch(({ message }) => this.setState({ errorMsg: message }));
    }
  };

  toggleNewAccount = () => {
    this.setState(({ newAccount }) => {
      return { newAccount: !newAccount };
    });
  };

  submitCode = event => {
    event.preventDefault();
    const { username, code } = this.state;
    Auth.confirmSignUp(username, code).then(() => {
      this.props.authenticateUser(username, true);
    });
  };

  render() {
    const { newAccount, awaitingCode, errorMsg } = this.state;
    return (
      <Container
        maxWidth="xs"
        justifyContent="center"
        style={{ marginTop: 50 }}
      >
        <Paper elevation={2} style={{ padding: 10 }}>
          {!newAccount ? (
            <SignInForm
              handleChange={this.handleChange}
              signIn={this.signIn}
              toggleNewAccount={this.toggleNewAccount}
            />
          ) : awaitingCode ? (
            <ConfirmationForm
              submitCode={this.submitCode}
              handleChange={this.handleChange}
            />
          ) : (
            <SignUpForm
              handleChange={this.handleChange}
              signUp={this.signUp}
              toggleNewAccount={this.toggleNewAccount}
            />
          )}

          {errorMsg && <p>{errorMsg}</p>}
        </Paper>
      </Container>
    );
  }
}

export default LoginPage;
