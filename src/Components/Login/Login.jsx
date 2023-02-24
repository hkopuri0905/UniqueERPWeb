import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../Home/Home';
import Invite from '../Invite/Invite';
import Referrals from '../Referrals/Referrals';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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



export default function Login({setUserEmail, setOTP,userEmail,OTP,requestOTP,login }) {
  const [display, setDisplay] = useState("");
  const [displayContent, setDisplayContent] = useState();
  //const [userEmail, setUserEmail] = useState();
  //const [OTP, setOTP] = useState();
  //const [userLoggedin, setUserLoggedin] = useState(false);
  //const [candidateId, setCandidateId] = useState("");
  

 

  function changeUserEmail(event) {
    setUserEmail(event.target.value);
  }
  function changeOTP(event) {
    setOTP(event.target.value);
  }

  // useEffect(() => {
  //   if (userLoggedin) {
  //     setDisplay("home");
  //   }
  // }, [userLoggedin]);

  function changeDisplay(display) {
    setDisplay(display);
  }


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