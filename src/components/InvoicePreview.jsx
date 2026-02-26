function InvoicePreview({ seller, buyer, items, totals }) {

  const grandTotal =
    totals.totalvalue + totals.totalcgst + totals.totalsgst + totals.totaligst;

  return (
    <div style={{ marginTop: "30px", padding: "15px" }}>
      <h2>Invoice Preview</h2>

      <h3>Seller Details</h3>
      <p>Company: {seller.company}</p>
      <p>GSTIN: {seller.gstin}</p>
      <p>Address: {seller.address}</p>
      <p>State: {seller.state}</p>

      <h3>Buyer Details</h3>
      <p>Company: {buyer.company}</p>
      <p>GSTIN: {buyer.gstin}</p>
      <p>Address: {buyer.address}</p>
      <p>Email: {buyer.email}</p>
      <p>Phone: {buyer.phone}</p>
      <p>State: {buyer.state}</p>

      <h3>Items</h3>
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

      <button onClick={() => window.print()}>Print Invoice</button>
    </div>
  );
}

export default InvoicePreview;