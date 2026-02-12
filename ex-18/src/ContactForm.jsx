import { useState, useEffect } from "react";

function ContactForm({ dispatch, editingContact, setEditingContact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editingContact) {
      setFormData(editingContact);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error while typing
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === ""
    ) {
      setError("Form is empty. Please fill in all fields.");
      return;
    }

    if (editingContact) {
      dispatch({ type: "edit", payload: formData });
      setEditingContact(null);
    } else {
      dispatch({ type: "add", payload: formData });
    }

    setFormData({ name: "", email: "", phone: "" });
    setError("");
  };

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  };

  const labelStyle = {
    width: "80px",
    fontSize: "25px",
  };

  const inputStyle = {
    flex: 1,
    padding: "6px 10px",
    fontSize: "16px",
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div style={rowStyle}>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Error Message */}
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <button
        type="submit"
        style={{
          padding: "8px 14px",
          fontSize: "16px",
        }}
      >
        {editingContact ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ContactForm;
