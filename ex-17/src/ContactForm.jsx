import useForm from "./useForm";

function ContactForm() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", values);
    // resetForm();
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <h2>Custom hook</h2>

      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Phone:</label>
        <br />
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Message:</label>
        <br />
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
