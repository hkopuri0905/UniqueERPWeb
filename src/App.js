import './App.css';
import { BrowserRouter, Routes, useNavigate,Navigate,Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Invite from './Components/Invite/Invite';
import Login from './Components/Login/Login';
import Logout from './Components/Logout';
import { useState, useEffect } from "react";
import Referrals from './Components/Referrals/Referrals';
import ProtectedRoute from './Components/GuardedRouter';



function App() {
    // return (
    //   <div className="App">
    //     <Login />
    //   </div>
    // );
    const [userLoggedin, setUserLoggedin] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false);
   
    const [display, setDisplay] = useState("");
    const [displayContent, setDisplayContent] = useState();
    const [userEmail, setUserEmail] = useState();
    const [OTP, setOTP] = useState();
    const navigate = useNavigate();
    //const [userLoggedin, setUserLoggedin] = useState(false);
    const [candidateId, setCandidateId] = useState("");
    function requestOTP() {
      fetch("https://www.contingentpro.com/generate",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: userEmail
          })
        }).then((res) => {
          console.log(res);
        })
        .catch((error) => console.error(error));
    }
  
    async function login() {
     // history("/home");
      await fetch("https://www.contingentpro.com/validate",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: userEmail, otp: OTP })
        })
        .then((resp) => resp.json())
        .then((res) => {
          //var x = res;  
          //if (resp.status == 200)  {
          setCandidateId(res.candidateId);
          setUserLoggedin(true);
          navigate("/home");
          // }
        })
        .catch((error) => console.error(error));
    };

    
  return (

    <div>
    <Routes>
       <Route path="/" element={<Login  setUserEmail={setUserEmail} setOTP={setOTP} userEmail={userEmail} OTP={OTP} requestOTP={requestOTP} login={login}/>}/> 
        <Route exact path="/home" element={
            <ProtectedRoute user={userLoggedin}>
              <Home />
            </ProtectedRoute>}/>
        <Route exact path="/invite" element={
            <ProtectedRoute user={userLoggedin}>
              <Invite />
            </ProtectedRoute>}/> 
        <Route exact path="/referrals" element={<ProtectedRoute user={userLoggedin}>
              <Referrals emailId={userEmail} candidateId={candidateId} />
            </ProtectedRoute>}/>
            <Route exact path="/logout" element={<ProtectedRoute user={loggedOut}>
              <Logout/>
            </ProtectedRoute>}/>
        {/* <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
</div>
  );

  function LogoutButton() {
   

  const handleLogout = () => {
    setUserLoggedin(false);
    setLoggedOut(true);
  };

  

  useEffect(() => {
    if (!userLoggedin) {
      // If the user is logged out, redirect them to a public page
      return <Navigate to="/"/>;
    }
  });

  return (
    <div>
      {userLoggedin? (
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
}


export default App;
