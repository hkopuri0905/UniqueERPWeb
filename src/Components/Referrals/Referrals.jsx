import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import NavigationBar from "../Navbar";


export default function Referrals({ emailId: emailId, candidateId: candidateId, handleLogout }) {


  const [candidates, setCandidates] = useState([]);
  const [bonusDetails, setBonusDetails] = useState([]);
  async function getCandidates() {
    await fetch("https://www.contingentpro.com/referralDetails", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailId,    //"uniquecand4@gmail.com" emailId
        candidateId: candidateId  //"UN_11_CAND"  candidateId
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data.referredCandidateDetails)
        setBonusDetails(data.referredBonusDetails)

      })
      .catch((error) => console.error(error))
  }


  useEffect(() => {
    getCandidates();
  }, []);

  /*useEffect(() => {
    getBonusDetails();
  }, []);*/

  return (
    <div>
    <NavigationBar userEmail={emailId} candidateId={candidateId} handleLogout={handleLogout} />
      <div style={{ width: '70%', margin: '0 auto', border:'20px dark'}}>
        <h4>Referred Candidates Details:</h4>
      </div>
      <Row style={{ width: '70%', margin: '0 auto' }}>
        <Col md={6}>
          <MDBTable>
            <MDBTableHead light style= {{color: '#3b71ca'}}>
              <tr>
                <th>S.NO</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Status</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {candidates.length > 0 && candidates.map((candidate, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{candidate.firstName}</td>
                    <td>{candidate.lastName}</td>
                    <td>{candidate.emailID}</td>
                    <td>{candidate.status}</td>
                  </tr>
                )
              }
              )}
            </MDBTableBody>
          </MDBTable>
        </Col>
        <Col md={6} >
          <Row style={{ width: '70%', margin: '0 auto', border:'20px dark'}}><h5>Referral Bonus Details </h5></Row>
          <Row>
            <Col md={6}>
              Number of Consultants Referred
            </Col>
            <Col >
              :{bonusDetails.length > 0 && bonusDetails[0].creditValue}</Col>
          </Row>
          <Row>
            <Col md={6}>

              Referral Credits
            </Col>
            <Col>:{bonusDetails.length > 0 && bonusDetails[2].creditValue}</Col>
          </Row>
          <Row>
            <Col md={6}>

              Interview Credits</Col><Col> :{bonusDetails.length > 0 && bonusDetails[3].creditValue}</Col>
          </Row>
          <Row>
            <Col md={6}>

              Credits Paid
            </Col><Col>:{bonusDetails.length > 0 && bonusDetails[1].creditValue}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}