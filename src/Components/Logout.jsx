import React, { useState } from 'react';
import { Route, Redirect, Navigate } from "react-router-dom";



function LogoutButton() {
    const [loggedOut, setLoggedOut] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedOut(true);
  };

  if (loggedOut) {
    // Redirect the user to a login or home page after they have logged out
    return <Navigate to="/"/>;
  }

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are logged out.</p>
          <p>Please log in to continue.</p>
        </div>
      )}
    </div>
  );
}

export default LogoutButton;