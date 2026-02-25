function PartyDetails({ title = "Party Details", data = {}, setData = () => {} }) {

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <h3>{title}</h3>

      <input
        name="company"
        placeholder="Company"
        value={data.company || ""}
        onChange={handleChange}
      />

      <input
        name="gstin"
        placeholder="GSTIN"
        value={data.gstin || ""}
        onChange={handleChange}
      />
    </div>
  );
}

export default PartyDetails;