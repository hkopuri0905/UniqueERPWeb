import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
import NavigationBar from "../Navbar";



export default function Invite({changeDisplay,userEmail,candidateId,handleLogout}) {

  //const [candidateId, setCandidateID] = useState();
  //const [uuserEmail, setUserEmailID] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailID, setEmailID] = useState();
  const [yourName, setYourName] = useState();

  const [clearModal, setClearToggle] = useState(false);

  const cleartoggle = () => {
    setFirstName("")
    setLastName("")
    setEmailID("")
    setYourName("")
    setClearToggle(!clearModal);
  }

  function clear() {
    //setCandidateID("");
    //setUserEmailID("");
    setFirstName("");
    setLastName("");
    setEmailID("");
    setYourName("");
  }

  function cancel() {
    changeDisplay("myReferrals");
  }

  const [alert, setAlert] = useState(null);

  function Alert(props) {
    return (
      <div className={`alert alert-${props.type}`} role="alert">
        {props.message}
      </div>
    );
  }

  async function sendInvite() {
    await fetch("https://www.contingentpro.com/invite", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        candidateId: candidateId,
        email: userEmail,
        inviteeFirstName: firstName,
        inviteeLastName: lastName,
        inviteeEmailId: emailID,
        candidateAlias: yourName,
      })
    })
      .then((response) => response.json())
      .then((x) => {
        if (x.status) { alert("Invite was sent to the Candidate") }
        else {
          alert(x.message)
        }
        clear()
      })
      .catch((error) => console.error(error));
  }

  function changeInput(event, type) {
    /*if (type === "candidateID") {
      setCandidateID(event.target.value);
    }
    else if (type === "userEmailID") {
      setUserEmailID(event.target.value);
    }*/
    if (type === "firstName") {
      setFirstName(event.target.value);
    }
    else if (type === "lastName") {
      setLastName(event.target.value);
    }
    else if (type === "emailID") {
      setEmailID(event.target.value);
    }
    else if (type === "yourName") {
      setYourName(event.target.value);
    }
  }


  return (

    <React.Fragment>
    <NavigationBar   userEmail={userEmail} candidateId={candidateId} handleLogout={handleLogout}/>
    <MDBCard className='bg-white my-5 mx-auto' style={{ border: 'false', boxShadow: 'none', padding: '0', maxWidth: '500px' }}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='firstName' 
            label='First name' 
            type='text' 
            value={firstName} onChange={(e)=>changeInput(e, 'firstName')}/>
          </MDBCol>
          <MDBCol>
            <MDBInput id='lastName' 
            label='Last name' 
            type='text'
            value={lastName} onChange={(e)=>changeInput(e, 'lastName')} />
          </MDBCol>
        </MDBRow>

        <MDBInput
          type='email' id='emailAddress'
          label='Email address'
          wrapperClass='mb-4 w-100'
          value={emailID}  onChange={(e)=>changeInput(e, 'emailID')}
        />
        <MDBInput type='text'
          id='yourAlias'
          label='Your Name on Invite'
          wrapperClass='mb-4 w-100'
          value={yourName}  onChange={(e)=>changeInput(e, 'yourName')} />

        <MDBRow className='mb-3 d-flex align-items-center' >
          <MDBCol className='d-flex align-items-center justify-content-center'>
            <MDBBtn type='submit' 
            color='secondary'
            onClick={cleartoggle}
            >
              Clear
            </MDBBtn>
          </MDBCol >
          <MDBCol className='d-flex align-items-center justify-content-center'>
            <MDBBtn type='submit' color='secondary'
            onClick={() => cancel()}>
            Cancel
          </MDBBtn></MDBCol>

          <MDBCol className='d-flex align-items-center justify-content-center'>
            <MDBBtn type='submit'
            onClick={() => sendInvite()}>
            Invite
          </MDBBtn></MDBCol>

        </MDBRow>

      </MDBCardBody>
    </MDBCard>
    </React.Fragment>
    // </form>

  );
}