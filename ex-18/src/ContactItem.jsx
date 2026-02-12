function ContactItem({ contact, dispatch, setEditingContact }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: contact.favorite ? "#fff3cd" : "white",
      }}
    >
      <h3>
        {contact.name} {contact.favorite && "⭐"}
      </h3>

      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

      <button
        onClick={() =>
          dispatch({
            type: "toggleFavorite",
            payload: contact.id,
          })
        }
      >
        Toggle Favorite
      </button>

      <button
        onClick={() => setEditingContact(contact)}
        style={{ marginLeft: "10px" }}
      >
        Edit
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "delete",
            payload: contact.id,
          })
        }
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default ContactItem;
