export function validateGSTIN(gstin) {
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;
  return gstRegex.test(gstin);
}

export function validateEmail(email) {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailRegex.test(email);
}

export function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}