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
    const [alertMessage, setAlertMessage] = useState(null);
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
         
          if (res.candidateId)  {
          setCandidateId(res.candidateId);
          setUserLoggedin(true);
          navigate("/home");
          setAlertMessage('Login successful!')
          }
        })
        .catch((error) => console.error(error));
    };

    const handleLogout = () => {
      alert("You are currently logging out")
      setUserLoggedin(false);
      setLoggedOut(true);
      setUserEmail("")
      setOTP("")

    };

    
  return (

    <div>
    <Routes>
       <Route path="/" element={<Login  setUserEmail={setUserEmail} setOTP={setOTP}  OTP={OTP} requestOTP={requestOTP} login={login}/>}/> 
        <Route exact path="/home" element={
            <ProtectedRoute user={userLoggedin}>
              <Home userEmail={userEmail} candidateId={candidateId} handleLogout={handleLogout}/>
            </ProtectedRoute>}/>
        <Route exact path="/invite" element={
            <ProtectedRoute user={userLoggedin}>
              <Invite userEmail={userEmail} candidateId={candidateId} handleLogout={handleLogout}/>
            </ProtectedRoute>}/> 
        <Route exact path="/referrals" element={<ProtectedRoute user={userLoggedin}>
              <Referrals emailId={userEmail} candidateId={candidateId} handleLogout={handleLogout}/>
            </ProtectedRoute>}/>
            <Route exact path="/logout" element={<ProtectedRoute user={loggedOut}>
              <Logout/>
            </ProtectedRoute>}/>
        {/* <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
</div>
  );

 
   

 

        }


export default App;
