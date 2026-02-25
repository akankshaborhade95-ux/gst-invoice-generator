import React from "react";

function TaxSummary({ totals = {} }) {
  return (
    <div>
      <h3>Tax Summary</h3>
      <p>Subtotal: {totals.totalvalue}</p>
      <p>CGST: {totals.totalcgst}</p>
      <p>SGST: {totals.totalsgst}</p>
      <p>IGST: {totals.totaligst}</p>
    </div>
  );
}

export default TaxSummary;