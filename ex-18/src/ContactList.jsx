import ContactItem from "./ContactItem";

function ContactList({ contacts, dispatch, setEditingContact }) {
  if (contacts.length === 0) {
    return <p>No contacts yet.</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          dispatch={dispatch}
          setEditingContact={setEditingContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
