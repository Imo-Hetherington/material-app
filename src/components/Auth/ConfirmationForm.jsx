import React from "react";
import { Grid, Link, TextField, Button, Typography } from "@material-ui/core";

const ConfirmationForm = ({ submitCode, handleChange }) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography component="h1" variant="h5">
        Confirm Code
      </Typography>
      <Typography component="p" variant="p">
        A confirmtion code has been sent to the email address provided.
      </Typography>
      <form onSubmit={submitCode}>
        <TextField
          placeholder="Type confirmation code here"
          onChange={handleChange}
          name="code"
          variant="outlined"
          margin="normal"
          label="Confirmation Code"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit Code
        </Button>
      </form>
    </Grid>
  );
};

export default ConfirmationForm;
