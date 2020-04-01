import React from "react";
import { Grid, Link, TextField, Button, Typography } from "@material-ui/core";

const SignUpForm = ({ handleChange, signUp, toggleNewAccount }) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography component="h1" variant="h5">
        Create Account
      </Typography>
      <form
        onSubmit={signUp}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: 15
        }}
      >
        <TextField
          placeholder="Type username here"
          onChange={handleChange}
          name="username"
          variant="outlined"
          margin="normal"
          label="Username"
        />
        <TextField
          placeholder="Type email here"
          onChange={handleChange}
          name="email"
          variant="outlined"
          margin="normal"
          label="Email Address"
        />
        <TextField
          placeholder="Type password here"
          onChange={handleChange}
          name="password"
          variant="outlined"
          margin="normal"
          secureTextEntry={true}
          label="Password"
          type="password"
        />
        <TextField
          placeholder="Confirm password"
          onChange={handleChange}
          type="password"
          name="confirmedPassword"
          variant="outlined"
          margin="normal"
          label="Confirm Password"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
      <Link onClick={toggleNewAccount}>I already have an account</Link>
    </Grid>
  );
};

export default SignUpForm;
