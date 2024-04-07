function calculator(a, b, sym) {
  let result;

  switch (sym) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
    default:
      throw new Error("Invalid Operator");
  }

  return result;
}

module.exports = calculator;
