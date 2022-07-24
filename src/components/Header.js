import React from "react";
function Header() {
  return (
    <div
      className="navbar sticky-top navbar-light"
      style={{
        backgroundColor: "#EFFFFD",
        border: "none",
      }}
    >
      <h5 className="navbar-text" style={{ marginLeft: "1%" }}>
        Contact Manager
      </h5>
    </div>
  );
}

export default Header;
