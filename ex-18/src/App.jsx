import { useReducer, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const initialState = [];

function contactReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "edit":
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact,
      );

    case "delete":
      return state.filter((contact) => contact.id !== action.payload);

    case "toggleFavorite":
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact,
      );

    default:
      return state;
  }
}

function ContactApp() {
  const [contacts, dispatch] = useReducer(contactReducer, initialState);

  const [editingContact, setEditingContact] = useState(null);

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h1>Contact Management App</h1>

      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <ContactList
        contacts={contacts}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
}

export default ContactApp;
