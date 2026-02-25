export function calculateTax(amount, rate, sameState) {
  const tax = (amount * rate) / 100;

  if (sameState) {
    return {
      totalcgst: tax / 2,
      totalsgst: tax / 2,
      totaligst: 0,
      totaltax: tax,
      grandtotal: amount + tax
    };
  }

  return {
    totalcgst: 0,
    totalsgst: 0,
    totaligst: tax,
    totaltax: tax,
    grandtotal: amount + tax
  };
}