import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getData } from "../api/images";

function AddContact(props) {
  //States
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [set, setSet] = useState(name);

  const navigation = useNavigate();
  const isMounted = useRef(false);

  //GET IMAGES From images.js through api
  const getImages = async () => {
    const data = await getData();
    setSet(data.url);
  };

  //Run on mount to get a image
  useEffect(() => {
    if (isMounted.current) {
      getImages();
    } else {
      isMounted.current = true;
    }
  }, []);

  // Adds the details to the state
  const add = (e) => {
    e.preventDefault();
    if (name === "" || phoneNumber === "") {
      alert("All the fields are mandatory");
      return;
    }
    props.addContactHandler({ name, phoneNumber, set });
    setName("");
    setPhoneNumber("");
    navigation("/");
  };

  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "bold", margin: "15px" }}>Add Contact</h2>
        <img
          src={set}
          alt="profile"
          style={{
            margin: "auto",
            borderRadius: "10%",
            width: "18%",
          }}
        />
        <button
          onClick={getImages}
          className="btn btn-primary"
          style={{ marginLeft: "10px" }}
        >
          Refresh Image
        </button>
        <form onSubmit={add}>
          <div className="col-auto">
            <label
              className="form-label"
              style={{ fontWeight: "bold", margin: "15px" }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Input Name here"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <label
              className="form-label"
              style={{ fontWeight: "bold", margin: "15px" }}
            >
              Phone Number
            </label>
            <input
              type="text"
              name="Number"
              placeholder="Input Phone Number here"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" style={{ margin: "15px" }}>
            Add
          </button>
          <Link to="/">
            <button className="btn btn-primary" style={{ margin: "15px" }}>
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
