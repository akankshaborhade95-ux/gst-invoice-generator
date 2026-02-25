import React, { useState, useEffect } from "react";
import PartyDetails from "./PartyDetails";
import LineItems from "./LineItems";
import TaxSummary from "./TaxSummary";
import InvoiceSummary from "./InvoiceSummary";
import { calculateTax } from "../utils/gstCalculations";

function InvoiceForm() {
    const [buyer, setBuyer] = useState({
        company: "",
        gstin: "",
        address: "",
        email : "",
        phone : ""
    });

   const [items, setItems] = useState([]);
  const [totals, setTotals] = useState({
    totalvalue: 0,
    totalcgst: 0,
    totaltax: 0,
    totalsgst:0,
    totaligst:0
  });
  useEffect(() => {
    const updatedTotals = calculateTax(items);
    setTotals(updatedTotals);
  }, [items]);

function calculateTotals() {
    let totalValue =0;

    items.forEach(item => {
        totalValue += item.quantity * item.rate;
    })

     const tax = calculateTax(totalValue, 18, true);

    setTotals({
      totalvalue: totalValue,
      ...tax
    });
} 
    return (
        <div>
            <h2>GST Invoice Generator</h2>
            <PartyDetails
        title="Buyer Details"
        data={buyer}
        setData={setBuyer}
      />
        <LineItems
        items={items}
        setItems={setItems}
      />
        <TaxSummary totals={totals}/>
        <InvoiceSummary totals={totals}/>

        </div>
    );
}
export default InvoiceForm;