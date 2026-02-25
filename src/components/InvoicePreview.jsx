import React from "react";

function InvoicePreview({ buyer = {}, items = [], totals = {} }) {

  const grandTotal =
    totals.totalvalue +
    totals.totalcgst +
    totals.totalsgst +
    totals.totaligst;

  function handlePrint() {
    window.print();
  }

  return (
    <div style={{ marginTop: "30px", padding: "15px" }}>

      <h2>Invoice Preview</h2>

      <h3>Buyer Details</h3>
      <p>Company: {buyer.company}</p>
      <p>GSTIN: {buyer.gstin}</p>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.rate}</td>
              <td>{item.quantity * item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Totals</h3>
      <p>Subtotal: {totals.totalvalue}</p>
      <p>CGST: {totals.totalcgst}</p>
      <p>SGST: {totals.totalsgst}</p>
      <p>IGST: {totals.totaligst}</p>

      <h2>Grand Total: {grandTotal}</h2>

      <button onClick={handlePrint}>
        Print Invoice
      </button>

    </div>
  );
}

export default InvoicePreview;