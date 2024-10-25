import React, { useState } from "react";
import "./Combined.css";

function LoginButton() {
  const [logOut, setLogOut] = useState(false);

  const openModel = () => {
    console.log("User logged out");
    // Add any additional logout logic here, if needed
  };

  return (
    <div>
      <div className="profile" onClick={() => setLogOut(true)}>
        <img id="profilePic" src="path/to/default-profile-pic.jpg" alt="profile" />
        <p id="profileName">Username</p>
      </div>
      
      {logOut && (
        <div className="questionContainer">
          <div className="question">Would you like to Log Out?</div>
          <div className="logoutOptions">
            <button onClick={openModel} className="yesbuttonOptions">
              Yes
            </button>
            <button onClick={() => setLogOut(false)} className="nobuttonOptions">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginButton;
