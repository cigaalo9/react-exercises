import { useReducer, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const initialState = [];

function contactReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { ...action.payload, id: Date.now(), favorite: false },
      ];
    case "edit":
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case "delete":
      return state.filter((contact) => contact.id !== action.payload);
    case "toggleFavorite":
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );
    default:
      return state;
  }
}

function ContactApp() {
  const [contacts, dispatch] = useReducer(contactReducer, initialState);
  const [editingContact, setEditingContact] = useState(null);

  return (
    <>
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
    </>
  );
}

export default ContactApp;
