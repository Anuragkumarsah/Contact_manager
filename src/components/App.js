import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  let [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid_v4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return id !== contact.id;
    });
    setContacts(newContactList);
  };

  useState(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContact) setContacts(retrieveContact);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={
              <div className="container">
                <AddContact addContactHandler={addContactHandler} />
              </div>
            }
          />
          <Route
            path="/"
            exact
            element={
              <div className="container">
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              </div>
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
