import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../Home/Home';
import Invite from '../Invite/Invite';
import Referrals from '../Referrals/Referrals';
import { useState } from "react";
import NavigationBar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';


export default function Login() {
  const [display, setDisplay] = useState("");
  const [displayContent, setDisplayContent] = useState();
  const [userEmail, setUserEmail] = useState();
  const [OTP, setOTP] = useState();
  const [userLoggedin, setUserLoggedin] = useState(false);
  const [candidateId, setCandidateId] = useState("");
  const history = useNavigate();

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
    history("/home");
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
        history("/home");
        // }
      })
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
      setDisplayContent(<Home />);
    } else if (display === "myReferrals") {
      setDisplayContent(<Referrals emailId={userEmail} candidateId={candidateId} />);

    }
    else if (display === "invite") {
      setDisplayContent(<Invite />);
    }
  }, [display]);

  // return (
  //   <div class="container">
  //     <div>
  //       {!userLoggedin && (<div class="login_page">
  //         <h1><span class="">Welcome to the </span>Candidate Portal</h1>
  //         <div class="">
  //           <section>
  //             <div class=""> <span class="">
  //               <a rel="noopener noreferrer" href="https://contingentpros.com/jobs" target="_blank">
  //                 <img lt-prop-title="Unique ERP Inc" lt-prop-tooltip-config="{&quot;position&quot;:&quot;followcursor&quot; ,&quot;appearance&quot; : &quot;box&quot;}"
  //                   src={require('./file.png')} />
  //               </a>
  //             </span>
  //             </div>
  //           </section>
  //         </div >
  //         <div class="" id="signin_header_id">
  //           <Row > <h2> Log In to Your Account </h2></Row>
  //           <Row>
  //             <Col md={6}> Enter Your Registered Email ID</Col>
  //             <Col md={6}>
  //               <input type="text" placeholder="email" value={userEmail} onChange={changeUserEmail} />
  //             </Col>
  //           </Row>
  //           <Row>
  //             <Col md={{ span: 4, offset: 6 }}>
  //               <Button type="submit" onClick={() => requestOTP()}> Request OTP </Button>
  //             </Col>
  //           </Row>
  //           <Row>
  //             <Col md={6}> Enter OTP to login:</Col>
  //             <Col md={6}>
  //               <input type="text" placeholder="OTP" value={OTP} onChange={changeOTP} />
  //             </Col>
  //           </Row>
  //           <Row>
  //             <Col id="login-button" md={{ span: 4, offset: 6 }}>
  //               <Button type="submit" onClick={() => login()}> Login </Button>
  //             </Col>
  //           </Row>
  //         </div>
  //       </div>)}
  //     </div>
  //     <div>
  //       {userLoggedin && (
  //         <div>
  //           <NavigationBar changeDisplay={changeDisplay} />
  //           {displayContent}
  //         </div>)}
  //     </div>
  //   </div>
  // );

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-space-around align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <div className="text-center">
                <img src={require('./file.png')} style={{ width: '185px' }} alt="My Business Image" />
                <h4 style={{ color: 'rgb(65 120 201)' }} className="mt-1 mb-5 pb-1">Referral Application</h4>
              </div>

              <MDBInput
                label='Enter registered email'
                wrapperClass='mb-4 w-100'
                id='typeEmail'
                required
                value={userEmail}
                onChange={changeUserEmail}
                type='email' />

              <MDBBtn size='lg'
                onClick={() => requestOTP()}>
                Request OTP
              </MDBBtn>

              <p className="text-white-50 mb-3"></p>
              <p className="text-white-50 mb-3"></p>
              

              <MDBInput
                label='Enter received otp'
                wrapperClass='mb-4 w-100'
                id='enterOtp'
                required
                value={OTP}
                onChange={changeOTP}
                type='number' />

              <MDBBtn size='lg'
                onClick={() => login()}>
                Login
              </MDBBtn>

              <p className="text-white-50 mb-3"></p>
              <p className="text-white-50 mb-3"></p>

              <p class="mb-5 pb-lg-2">Don't have an account? <a href="https://careers.contingentpros.com/candidateportal" 
                      style={{ color: 'rgb(65 120 201)' }}>Register on our Candidate Portal</a></p>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}
