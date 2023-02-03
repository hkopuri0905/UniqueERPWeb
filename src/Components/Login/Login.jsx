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

  async function login() {
    await fetch("https://www.contingentpro.com/validate",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, otp: OTP })
      })
      .then((resp) => resp)
      .then((res) => { var x = res; if (x.status == 200) { setCandidateId(x.json().candidateId); setUserLoggedin(true); } })
      .catch((error) => console.error(error));
  };

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
      setDisplayContent(<Referrals emailId={userEmail} candidateId={candidateId} />);

    }
    else if (display === "invite") {
      setDisplayContent(<Invite />);
    }
  }, [display]);

  return (
    <div class="container">
      <div>
        {!userLoggedin && (<div class="login_page">
          <h1><span class="">Welcome to the </span>Candidate Portal</h1>
          <div class="">
            <section>
              <div class=""> <span class="">
                <a rel="noopener noreferrer" href="https://contingentpros.com/jobs" target="_blank">
                  <img lt-prop-title="Unique ERP Inc" lt-prop-tooltip-config="{&quot;position&quot;:&quot;followcursor&quot; ,&quot;appearance&quot; : &quot;box&quot;}"
                    src="file.png" />
                </a>
              </span>
              </div>
            </section>
          </div >
          <div class="" id="signin_header_id">
            <Row > <h2> Log In to Your Account </h2></Row>
            <Row>
              <Col md={6}> Enter Your Registered Email ID</Col>
              <Col md={6}>
                <input type="text" placeholder="email" value={userEmail} onChange={changeUserEmail} />
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 4, offset: 6 }}>
                <Button type="submit" onClick={() => requestOTP()}> Request OTP </Button>
              </Col>
            </Row>
            <Row>
              <Col md={6}> Enter OTP to login:</Col>
              <Col md={6}>
                <input type="text" placeholder="OTP" value={OTP} onChange={changeOTP} />
              </Col>
            </Row>
            <Row>
              <Col id="login-button" md={{ span: 4, offset: 6 }}>
                <Button type="submit" onClick={() => login()}> Login </Button>
              </Col>
            </Row>
          </div>
        </div>)}
      </div>
      <div>
        {userLoggedin && (
        <div>
          <NavigationBar changeDisplay={changeDisplay} />
          {displayContent}
        </div>)}
      </div>
    </div>
  );
}
