import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function AddContact(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [set, setSet] = useState(name);
  console.log(set);
  const navigation = useNavigate();
  useEffect(() => {
    fetch("https://api.waifu.pics/sfw/bully")
      .then((response) => response.json())
      .then((json) => {
        setSet(json.url);
      });
  }, []);
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
        </form>
      </div>
    </div>
  );
}

export default AddContact;
