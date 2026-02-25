import React from "react";
import states from "../data/states";

function PartyDetails({ title, data = {}, setData }) {

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
        value={data.company}
        onChange={handleChange}
      />

      <input
        name="gstin"
        placeholder="GSTIN"
        value={data.gstin}
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Address"
        value={data.address}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={data.phone}
        onChange={handleChange}
      />

      <select
        name="state"
        value={data.state}
        onChange={handleChange}
      >
        <option value="">Select State</option>

        {states.map((s, i) => (
          <option key={i} value={s.name}>
            {s.name}
          </option>
        ))}

      </select>

    </div>
  );
}

export default PartyDetails;