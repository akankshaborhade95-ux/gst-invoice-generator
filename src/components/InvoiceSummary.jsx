import React from "react";

function InvoiceSummary({ totals = {} }) {
  const grand =
    totals.totalvalue +
    totals.totalcgst +
    totals.totalsgst +
    totals.totaligst;

  return (
    <div>
      <h3>Grand Total: {grand}</h3>
    </div>
  );
}

export default InvoiceSummary;