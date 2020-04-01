import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Bigraph from "./Bigraph";
import Equation from "./Equation";

const Dashboard = () => {
  return (
    <>
      {" "}
      <Container maxWidth="lg">
        <Typography component="h1" variant="h4">
          Dashboard
        </Typography>
        <Paper style={{ padding: 10, margin: 20 }}>
          <Bigraph />
        </Paper>
        <Paper style={{ padding: 10, margin: 20 }}>
          <Equation />
        </Paper>
      </Container>
    </>
  );
};

export default Dashboard;
