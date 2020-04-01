import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import authConfig from "./auth-config";
import Amplify from "aws-amplify";
import LoginPage from "./components/Auth/LoginPage";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

Amplify.configure(authConfig);

class App extends Component {
  state = { user: { authenticated: false, username: "" } };

  authenticateUser = username => {
    this.setState({ user: { authenticated: true, username } });
  };
  render() {
    const {
      user: { authenticated }
    } = this.state;
    if (authenticated) {
      return (
        <Router className="App">
          <Dashboard path="/" />
          <Profile path="/profile" />
        </Router>
      );
    }
    return <LoginPage path="/" authenticateUser={this.authenticateUser} />;
  }
}

export default App;
