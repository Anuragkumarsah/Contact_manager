import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import "./App.css";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const [contacts, setContacts] = useState([]);

  //Retrieve Contacts

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid_v4(),
      ...contact,
    };

    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete("/contacts/" + id);
    const newContactList = contacts.filter((contact) => {
      return id !== contact.id;
    });
    setContacts(newContactList);
  };

  useState(() => {
    // const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContact) setContacts(retrieveContact);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {}, [contacts]);
  return (
    <div className="body">
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
