import react from react;
  function TaxSummary({ totals = {} }) {
     return (
        <div>
              <h3>Tax Summary</h3>
                <p>Total Value: {totals.totalvalue}</p>
                <p>Total Cgst: {totals.totalcgst}</p>
                <p>Total Sgst: {totals.totalsgst}</p>
                <p>Total Igst: {totals.totaligst}</p>
                <p>Total Tax: {totals.totaltax}</p>
        
        </div>
     )
  }
    export default TaxSummary;