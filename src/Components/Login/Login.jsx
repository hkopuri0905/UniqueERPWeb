import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePage from '../Home/Home';
import Invite from '../Invite/Invite';
import Referrals from '../Referrals/Referrals';
import { useState } from "react";
import NavigationBar from "../Navbar";


export default function Login() {
  const [display, setDisplay] = useState("");
  const [displayContent, setDisplayContent] = useState();
  const [userEmail, setUserEmail] = useState();
  const [OTP, setOTP] = useState();
  const [userLoggedin, setUserLoggedin] = useState(false);
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

  async function login() 
  { 
    await fetch("https://www.contingentpro.com/validate", 
  { 
    method: 'POST',
     headers: { 'Content-Type': 'application/json' }, 
     body: JSON.stringify({ email: userEmail, otp: OTP }) })
     .then((resp) => resp)
     .then((res) => {var x = res; if(x.status == 200) { setCandidateId(x.json().candidateId); setUserLoggedin(true); } })
     .catch((error) => console.error(error)); };

  function changeUserEmail(event) {
    setUserEmail(event.target.value);
  }

  function changeOTP(event) {
    setOTP(event.target.value);
  }

  useEffect(() => {
    if (userLoggedin) {
      setDisplay("home");
    }
  }, [userLoggedin]);

  function changeDisplay(display) {
    setDisplay(display);
  }


  useEffect(() => {
    if (display === "" || display === "home") {
      setDisplayContent(<HomePage />);
    } else if (display === "myReferrals") {
          setDisplayContent(<Referrals emailId= {userEmail} candidateId={candidateId}/>);
      
          }
    else if (display === "invite") {
      setDisplayContent(<Invite />);
    }
  }, [display]);

  return (
    <div class = "main_header">
    <div class = "header">
      <h1><span class="cnl-slogan">Welcome to the </span>Candidate Portal</h1>
    <div class ="login_page">
      <section>
      <div class="vndr-acc-hdr"> <span class=""> <a rel="noopener noreferrer" href="https://contingentpros.com/jobs" target="_blank">  <img lt-prop-title="Unique ERP Inc" lt-prop-tooltip-config="{&quot;position&quot;:&quot;followcursor&quot; ,&quot;appearance&quot; : &quot;box&quot;}" src="/recruit/viewImage?fileId=aeu5401d0f02dce2944c18a16e4f190cfba95&amp;zgId=794296908"></img>  </a> </span> </div>
      <div>
        {!userLoggedin && (
          <div>
            <Row > <h3> Log In to Your Account </h3></Row>
            <Row>
              <Col md={3}> Enter Your Registered Email ID</Col>
              <Col md={2}>
                <input type="text" placeholder="email" value={userEmail} onChange={changeUserEmail} />
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 3 }}>
                <Button type="submit" onClick={() => requestOTP()}> Request OTP </Button>
              </Col>
            </Row>
            <Row>
              <Col md={3}> Enter OTP to login:</Col>
              <Col md={2}>
                <input type="text" placeholder="OTP" value={OTP} onChange={changeOTP} />
              </Col>
              <Col id = "login-button" md={1}>
                <Button type="submit"  onClick={() => login()}> Login </Button>
              </Col></Row>
          </div>)}
      </div>
      <div>{userLoggedin && (
        <div>
          <NavigationBar changeDisplay={changeDisplay} />
          {displayContent}
        </div>)}
      </div>
      </section>
    </div >
    </div>
    </div>
  );
}
