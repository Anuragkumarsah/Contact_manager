import React from "react";
function Header(){
    return (
       <div className="navbar sticky-top navbar-light" style={{backgroundColor: "white", border: "solid grey 0.5px"}}>
            <div className="container justify-content-center" >
                <h2 className="navbar-text">Contact Manager</h2>
            </div>
       </div>
    );
}

export default Header;