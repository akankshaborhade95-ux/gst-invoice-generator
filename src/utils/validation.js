export function validateGSTIN(gstin) {
  return gstin.length === 15;
}

export function validateEmail(email) {
  return email.includes("@");
}