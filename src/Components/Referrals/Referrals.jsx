import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Referrals({emailId : emailId, candidateId: candidateId}) {


  const [candidates, setCandidates] = useState([]);
  const [bonusDetails, setBonusDetails] = useState([]);
  console.log(candidateId);
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
      <div>
        <h4>Referred Candidates Details:</h4>
      </div>
      <Row>
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {candidates.length > 0 && candidates.map((candidate, index) => {
                return (
                  <tr key ={index}>
                    <td>{index}</td>
                    <td>{candidate.firstName}</td>
                    <td>{candidate.lastName}</td>
                    <td>{candidate.emailID}</td>
                    <td>{candidate.status}</td>
                  </tr>
                )
              }
              )}
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Row>Referral Bonus Details </Row>
          <Row>
            <Col md={6}>
              Number of Consultants Referred
            </Col>
            <Col>
              :{bonusDetails.length >0 &&  bonusDetails[0].creditValue}</Col>
          </Row>
          <Row>
            <Col md={6}>

              Referral Credits 
            </Col>
            <Col>:{bonusDetails.length >0 && bonusDetails[2].creditValue}</Col>
          </Row>
          <Row>
            <Col md={6}>

              Interview Credits</Col><Col> :{bonusDetails.length >0 && bonusDetails[3].creditValue}</Col>
          </Row>
          <Row>
            <Col md={6}>

              Credits Paid
            </Col><Col>:{bonusDetails.length >0 && bonusDetails[1].creditValue}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}