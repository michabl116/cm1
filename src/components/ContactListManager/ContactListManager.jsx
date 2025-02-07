import React, { useState } from "react";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", email: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  }

  function addContact() {
    if (newContact.name.trim() !== "" && newContact.email.trim() !== "") {
      setContacts((c) => [...c, newContact]);
      setNewContact({ name: "", email: "" });
    }
  }

  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter name..."
          name="name"
          value={newContact.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Enter email..."
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <ol>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} ({contact.email})
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ContactListManager;