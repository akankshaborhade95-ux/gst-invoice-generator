import React, { useState } from "react";
import { states } from "../data/states";

function PartyDetails({ title, data = {}, setData }) {
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    let { name, value } = e.target;
    let newErrors = { ...errors };
    if (name === "gstin") {

      value = value.toUpperCase().slice(0, 15);

      if (value.length !== 15)
        newErrors.gstin = "GSTIN must be 15 characters";
      else
        delete newErrors.gstin;
    }

    if (name === "email") {

      value = value.toLowerCase();

      if (!value.includes("@"))
        newErrors.email = "Email must contain @";
      else
        delete newErrors.email;
    }

    if (name === "phone") {

      value = value.replace(/\D/g, "").slice(0, 10);

      if (value.length !== 10)
        newErrors.phone = "Phone must be 10 digits";
      else
        delete newErrors.phone;
    }

    setErrors(newErrors);

    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <div className="party-box">
      <h3>{title}</h3>

      <div className="form-group full">
        <label>Company Name</label>
        <input
          name="company"
          value={data.company || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-group full">
        <label>Address</label>
        <input
          name="address"
          value={data.address || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <div className="form-group half">
          <label>GSTIN</label>
          <input
            name="gstin"
            value={data.gstin || ""}
            onChange={handleChange}
          />
          {errors.gstin && <p className="error">{errors.gstin}</p>}
        </div>

        <div className="form-group half">
          <label>State</label>
          <select
            name="state"
            value={data.state || ""}
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
      </div>

      <div className="row">
        <div className="form-group half">
          <label>Email</label>
          <input
            name="email"
            value={data.email || ""}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group half">
          <label>Phone No.</label>
          <input
            name="phone"
            value={data.phone || ""}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>
    </div>
  );
}

export default PartyDetails;