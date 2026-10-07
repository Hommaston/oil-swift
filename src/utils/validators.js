export const validateRequired = (value, label) =>
  value.trim() ? "" : `${label} is required`;

export const validateEmail = (email) => {
  if (!email.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  return "";
};

const clean = (errors) =>
  Object.fromEntries(Object.entries(errors).filter(([, msg]) => msg));

export const validateSignUp = (v) =>
  clean({
    fName: validateRequired(v.fName, "First name"),
    lName: validateRequired(v.lName, "Last name"),
    occupation: validateRequired(v.occupation, "Occupation"),
    email: validateEmail(v.email),
    password: validatePassword(v.password),
  });

export const validateLogin = (v) =>
  clean({ email: validateEmail(v.email), password: validatePassword(v.password) });