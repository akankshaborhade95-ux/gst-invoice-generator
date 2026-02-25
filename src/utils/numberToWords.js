export function numberToWords(num) {
  const words = [
    "Zero","One","Two","Three","Four","Five",
    "Six","Seven","Eight","Nine","Ten"
  ];

  if (num <= 10) {
    return words[num];
  }

  return num.toString();
}