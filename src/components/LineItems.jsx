import React from "react";
function LineItems({ items = [], setItems }) {
  function addRow() {
    setItems([
      ...items,
      {
        description: "",
        quantity: "",
        rate: ""
      }
    ]);
  }

  function updateItem(index, field, value) {
    const copy = [...items];
    copy[index][field] = value;
    setItems(copy);
  }

  function deleteRow(index) {
    const filtered = items.filter((_, i) => i !== index);
    setItems(filtered);
  }

  return (
    <div>

      <h3>Items</h3>

      <table border="1" cellPadding="5">

        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {items.map((item, i) => (
            <tr key={i}>

              <td>
                <input
                  value={item.description}
                  onChange={(e) =>
                    updateItem(i, "description", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(i, "quantity", Number(e.target.value))
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) =>
                    updateItem(i, "rate", Number(e.target.value))
                  }
                />
              </td>

              <td>
                {item.quantity * item.rate}
              </td>

              <td>
                <button onClick={() => deleteRow(i)}>Delete</button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <button onClick={addRow}>Add Item</button>

    </div>
  );
}

export default LineItems;