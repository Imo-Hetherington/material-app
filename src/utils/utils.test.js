const { toMathML } = require("./utils");

describe("toMathML", () => {
  test("Given a string containing numerical values, returns the string in math, mrow and mn tags", () => {
    expect(toMathML("32")).toBe("<mn>3</mn><mn>2</mn>");
  });
  test("Given a string containing numerical values and operators, returns the string in math, mrow mn and mo tags", () => {
    expect(toMathML("3*2")).toBe("<mn>3</mn><mo>x</mo><mn>2</mn>");
    expect(toMathML("3/2")).toBe("<mn>3</mn><mo>&#247;</mo><mn>2</mn>");
  });
  test("Given a string containing numerical values, operators and variables, returns the string in mathml", () => {
    expect(toMathML("3/x")).toBe("<mn>3</mn><mo>&#247;</mo><mi>x</mi>");
  });
  test("Given an empty string, returns an empty string", () => {
    expect(toMathML("3/x")).toBe("<mn>3</mn><mo>&#247;</mo><mi>x</mi>");
  });
  test("Given a number/variable to a given power, returns the statement in MathML", () => {
    expect(toMathML("3^x")).toBe("<mn>3</mn><sup><mi>x</mi></sup>");
  });
});
