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



export default function Invite(changeDisplay) {

  const [candidateID, setCandidateID] = useState();
  const [userEmailID, setUserEmailID] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailID, setEmailID] = useState();
  const [yourName, setYourName] = useState();

  function clear() {
    setCandidateID("");
    setUserEmailID("");
    setFirstName("");
    setLastName("");
    setEmailID("");
    setYourName("");
  }

  function cancel() {
    changeDisplay("myReferrals");
  }

  async function sendInvite() {
    await fetch("https://www.contingentpro.com/invite", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        candidateId: candidateID,
        email: userEmailID,
        inviteeFirstName: firstName,
        inviteeLastName: lastName,
        inviteeEmailId: emailID,
        candidateAlias: yourName,
      })
    })
      .then((response) => response.json())
      .then((x) => {
        if (x.status) { alert(x.message) }
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
    //   <div id = "inviteInfo">
    //     <div>
    //       <h3> Candidate Referral Form</h3>
    //       <h4> I am Referring</h4>
    //       {/*< Row>
    //         <Col md={6}>My Candidate ID:</Col>
    //         <Col md={6}><input type="text" value={candidateID} onChange={(e)=>changeInput(e, 'candidateID')}/></Col>
    //       </Row>
    //       < Row>
    //         <Col md={6}>My Email ID:</Col>
    //         <Col md={6}><input type="text" value={userEmailID} onChange={(e)=>changeInput(e, 'userEmailID')}/></Col>
    // </Row> */}
    //       < Row>
    //         <Col md={4}>First Name</Col>
    //         <Col md={8}><input type="text" id = "fntextbox" value={firstName} onChange={(e)=>changeInput(e, 'firstName')}/></Col>
    //       </Row>
    //       < Row>
    //         <Col md={4}>Last Name</Col>
    //         <Col md={8}><input type="text" id = "lntextbox" value={lastName} onChange={(e)=>changeInput(e, 'lastName')}/></Col>
    //       </Row>
    //       < Row>
    //         <Col md={4}>Email ID</Col>
    //         <Col md={8}><input type="text" id ="emailidtextbox" value={emailID}  onChange={(e)=>changeInput(e, 'emailID')}/></Col>
    //       </Row>
    //       < Row>
    //         <Col md={4}>Your Name</Col>
    //         <Col md={8}><input type="text" id ="yournametextbox" value={yourName}  onChange={(e)=>changeInput(e, 'yourName')}/></Col>
    //       </Row>
    //     </div>
    //     <Row className="buttons">
    //       <Col md={{span:1, offset: 3}}><Button type="button" onClick={() => clear()}>Clear</Button></Col>
    //       <Col md={1}><Button type="button" onClick={() => cancel()}>Cancel </Button></Col>
    //       <Col md={2}><Button type="button" onClick={() => sendInvite()}> Send Invite </Button></Col>
    //     </Row>
    //   </div>

    <React.Fragment>
    <NavigationBar />
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
            onClick={() => clear()}
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