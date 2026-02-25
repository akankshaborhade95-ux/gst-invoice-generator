function LineItems({ items = [], setItems = () => {} }) {

  function addRow() {
    setItems([
      ...items,
      { quantity: 1, rate: 0 }
    ])
  }

  function updateItem(index, field, value) {
    const copy = [...items];
    copy[index][field] = value;
    setItems(copy);
  }

  function deleteRow(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h3>Items</h3>

      {items.map((item, i) => (
        <div key={i}>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateItem(i, "quantity", Number(e.target.value))
            }
          />

          <input
            type="number"
            value={item.rate}
            onChange={(e) =>
              updateItem(i, "rate", Number(e.target.value))
            }
          />

          <button onClick={() => deleteRow(i)}>Delete</button>
        </div>
      ))}

      <button onClick={addRow}>Add Item</button>
    </div>
  );
}
export default LineItems;