import React from "react";
function Header() {
  return (
    <div
      className="navbar sticky-top navbar-light"
      style={{ backgroundColor: "white", border: "solid grey 0.5px" }}
    >
      <h5 className="navbar-text" style={{ marginLeft: "1%" }}>
        Contact Manager
      </h5>
    </div>
  );
}

export default Header;
