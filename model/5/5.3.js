function passvalidate1(password) {
  if (password.length > 7) {
    return 'strong';
  } else {
    return 'Weak';
  }
}

const passvalidate2 = password > 7 ? "strong" : "Weak";

const passvalidate3 = password > 7 && word.charAt(0) === word.charAt(0).toUpperCase() ? "strong" : "Weak";

const advancedPassValidate = password => {
  return (password.length > 7 && password.match(/[A-Z]/)) ? "Very Strong" : (password.length === 7) ? "Strong" : "Weak";
}