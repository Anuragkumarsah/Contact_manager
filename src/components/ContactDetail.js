import React from "react";
import { useLocation, Link } from "react-router-dom";

const ContactDetail = (props) => {
  //   const { name, phoneNumber } = props.contacts;
  const location = useLocation();
  // const id = location.pathname.slice(1);
  // const contactid = props.contacts.filter((contact) => {
  //   return id === contact.id;
  // });

  // function putURL(json) {
  //   if (set === 1) setURL(json.url);
  // }

  return (
    <div
      style={{
        margin: "auto",
        marginTop: "2%",
        width: "25%",
      }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <img src={location.state.foo.set} className="card-img-top" alt="user" />
        <div className="card-body">
          <h5 className="card-title">Name : {location.state.foo.name}</h5>
          <h6 className="card-text">
            Phone Number : {location.state.foo.phoneNumber}
          </h6>

          <Link to="/">
            <button className="btn btn-primary">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
