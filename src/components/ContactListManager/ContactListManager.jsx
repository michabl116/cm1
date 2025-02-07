import React, { useState } from "react";
import "./ContactListManager.css";

function ContactListManager() {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [contacts, setContacts] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  }

  function addContact() {
    if (contact.name.trim() && contact.email.trim() && contact.phone.trim()) {
      setContacts((c) => [...c, contact]);
      setContact({ name: "", email: "", phone: "" });
    }
  }

  function deleteContact(index) {
    setContacts(contacts.filter((_, i) => i !== index));
  }

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>
      <div className="form-container">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name..."
          value={contact.name}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email..."
          value={contact.email}
          onChange={handleChange}
        />

        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number..."
          value={contact.phone}
          onChange={handleChange}
        />

        <button className="add-button" onClick={addContact}>Add Contact</button>
      </div>

      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button className="delete-button" onClick={() => deleteContact(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactListManager;
