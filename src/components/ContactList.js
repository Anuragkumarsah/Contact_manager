import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactList = (props) => {
  const deleteContactHandler = (id) => props.getContactId(id);
  let renderContacts = props.contacts.map((contacts) => {
    return (
      <ContactCard
        contacts={contacts}
        clickHandler={deleteContactHandler}
        key={contacts.id}
      />
    );
  });
  return (
    <div
      style={{
        margin: "auto",
        width: "63.5%",
      }}
    >
      <div
        className="card-header"
        style={{ textAlign: "center", width: "45rem" }}
      >
        <div className="row">
          <div className="col">
            <h3 style={{ marginLeft: "14.5%" }}>Contact List</h3>
          </div>
          <Link to="/add" className="col-3">
            <button to="/add" className="btn btn-primary">
              Add Contacts
            </button>
          </Link>
        </div>
      </div>
      <div>{renderContacts}</div>
    </div>
  );
};

export default ContactList;
