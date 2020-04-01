const toMathML = str => {
  const mathArr = str.split("");

  let mathML = ``;

  for (let i = 0; i < mathArr.length; i++) {
    let char = mathArr[i];
    if (!isNaN(char)) mathML += `<mn>${char}</mn>`;
    else if (/[a-z]/.test(char)) mathML += `<mi>${char}</mi>`;
    else if (/[\^]/.test(char)) {
      mathML += `<sup>${toMathML(mathArr[++i])}</sup>`;
    } else mathML += operators[char];
  }

  return mathML;
};

const operators = {
  "*": "<mo>x</mo>",
  "+": "<mo>+</mo>",
  "/": "<mo>&#247;</mo>",
  "-": "<mo>-</mo>",
  "=": "<mo>=</mo>"
};

module.exports = { toMathML };
