const passwordValidationWithIfElse = (password) => {
  if (password.length > 7) {
    return "Strong";
  }
  return "Weak";
};

const passwordValidationTernary = (password) => {
  return password.length > 7 ? "Strong" : "Weak";
};

const passwordValidationAnd = (password) => {
  return (password.length > 7 && "Strong") || "Weak";
};

const passwordValidationAdvance = (password) => {
  return password.length > 7 && password !== password.toLowerCase()
    ? "Very Strong"
    : password.length > 7
    ? "Strong"
    : "Weak";
};

const password = "Asdf1234!";
console.log(passwordValidationAdvance(password));
