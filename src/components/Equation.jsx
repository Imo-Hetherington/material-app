import React, { Component } from "react";
import MathJax from "react-mathjax-preview";
import { TextField, Button, Typography } from "@material-ui/core";
import { toMathML } from "../utils/utils";

class Equation extends Component {
  state = {
    equation: ``
  };

  stringToHTML = function(str) {
    const eq = document.createElement("mrow");
    eq.innerHTML = str;
    return eq;
  };

  setEquation = event => {
    console.log(event);
    event.preventDefault();
    const equation = event.target[0].value;
    this.setState({ equation });
  };

  render() {
    const equation = `<math xmlns='http://www.w3.org/1998/Math/MathML'>${toMathML(
      this.state.equation
    )}</math>`;
    return (
      <>
        <Typography variant="h5" component="h2">
          Equation Converter
        </Typography>
        <form onSubmit={this.setEquation}>
          <TextField />
          <Button type="submit" color="primary">
            Convert
          </Button>
        </form>
        <div>
          <MathJax math={equation} />
        </div>
      </>
    );
  }
}

export default Equation;
