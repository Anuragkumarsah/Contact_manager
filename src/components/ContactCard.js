import React from "react";
import { Link } from "react-router-dom";

const CardContact = (props) => {
  const { id, name, phoneNumber, set } = props.contacts;
  return (
    <div
      style={{
        margin: "auto",
        width: "88%",
      }}
    >
      <div className="card" style={{ width: "40rem" }}>
        <div className="row card-body">
          <div className="col" style={{ borderBottom: "0.5px solid grey" }}>
            <Link
              to="/contact/${id}"
              state={{ foo: props.contacts }}
              style={{ textDecoration: "none" }}
            >
              <div className="text-left card-title" style={{ color: "black" }}>
                {name}
              </div>
              <div className="text-left card-text">{phoneNumber}</div>
            </Link>
          </div>
          <div className="col-1" style={{ borderBottom: "0.5px solid grey" }}>
            <i
              className="bi bi-trash text-end"
              style={{
                margin: "0px 10px 0px 0px",
                fontSize: "25px",
                color: "red",
              }}
              onClick={() => props.clickHandler(id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
