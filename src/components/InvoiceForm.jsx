
import React, { useState, useEffect } from "react";
import PartyDetails from "./PartyDetails";
import LineItems from "./LineItems";
import TaxSummary from "./TaxSummary";
import InvoiceSummary from "./InvoiceSummary";
import InvoicePreview from "./InvoicePreview";
import "./Invoiceform.css";
function InvoiceForm() {
  const [seller, setSeller] = useState({
    company: "",
    gstin: "",
    address: "",
    state: ""
  });

  const [buyer, setBuyer] = useState({
    company: "",
    gstin: "",
    address: "",
    email: "",
    phone: "",
    state: ""
  });

  const [items, setItems] = useState([]);

  const [totals, setTotals] = useState({
    totalvalue: 0,
    totalcgst: 0,
    totalsgst: 0,
    totaligst: 0,
    totaltax: 0,
    grandtotal: 0
  });

  useEffect(() => {
    calculateTotals();
  }, [items, buyer, seller]);

  function calculateTotals() {

  let subtotal = 0;

  items.forEach(item => {
    const qty = Number(item.quantity) || 0;
    const rate = Number(item.rate) || 0;

    subtotal += qty * rate;
  });
  const gstRate = 18;
  let cgst = 0;
  let sgst = 0;
  let igst = 0;
  if (buyer.state === seller.state) {
    cgst = subtotal * gstRate / 2 / 100;
    sgst = subtotal * gstRate / 2 / 100;

  } else {
    igst = subtotal * gstRate / 100;
  }
  const totalTax = cgst + sgst + igst;
  const grandTotal = subtotal + totalTax;

  setTotals({
    totalvalue: subtotal,
    totalcgst: cgst,
    totalsgst: sgst,
    totaligst: igst,
    totaltax: totalTax,
    grandtotal: grandTotal
  });
}
  return (
  <div className="invoice-container">
  <h2>GST Invoice Generator</h2>

  <div className="section-box">
    <PartyDetails title="Seller Details" data={seller} setData={setSeller} />
  </div>

  <div className="section-box">
    <PartyDetails title="Buyer Details" data={buyer} setData={setBuyer} />
  </div>

  <div className="section-box">
    <LineItems items={items} setItems={setItems} />
  </div>

  <div className="section-box">
    <TaxSummary totals={totals} />
    <InvoiceSummary totals={totals} />
  </div>

  <div className="section-box">
    <InvoicePreview seller={seller} buyer={buyer} items={items} totals={totals} />
  </div>
</div>
  );
}
export default InvoiceForm;