import React from "react";
import { Grid, Link, TextField, Button, Typography } from "@material-ui/core";

const SignInForm = ({ handleChange, signIn, toggleNewAccount }) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography component="h1" variant="h4">
        Sign In
      </Typography>
      <form
        onSubmit={signIn}
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
          placeholder="Type password here"
          onChange={handleChange}
          name="password"
          variant="outlined"
          margin="normal"
          label="Password"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </form>
      <Link onClick={toggleNewAccount}>
        Don't have an account? Click here to create account
      </Link>
    </Grid>
  );
};

export default SignInForm;
