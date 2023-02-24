import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavLink,
  MDBRow, MDBCol 
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

export default function NavigationBar({userEmail,candidateId,handleLogout}) {

  // return (
  //   <Row>
  //     <Col md={3} onClick={() => rout("home")}>
  //     <Link to={this.props.myroute} onClick={hello}>Here</Link>
  //       <Button className="navigation_item">Home </Button>
  //     </Col>
  //     <Col md={3} onClick={() => changeDisplay("myReferrals")}>
  //       <Button className="navigation_item">Referrals </Button>
  //     </Col>
  //     <Col md={3} onClick={() => changeDisplay("invite")}>
  //       <Button className="navigation_item">Invite</Button>
  //     </Col>
  //   </Row>
  // );

  
  // return (
  //   <div>
  //     {userLoggedin? (
  //       <div>
  //         <p>You are logged in.</p>
  //         <button onClick={handleLogout}>Logout</button>
  //       </div>
  //     ) : (
  //       <div>
  //         <p>You are logged out.</p>
  //         <p>Please log in to continue.</p>
  //       </div>
  //     )}
  //   </div>
  // );
      


  return (
    <div>

   
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBCollapse navbar >
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to="/home">Home</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to="/referrals"> Referrals</Link></MDBNavbarLink >
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to="/invite">Invite</Link> 
              </MDBNavbarLink >
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink onClick={handleLogout}><Link to="/">Logout</Link> 
              </MDBNavbarLink >
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <MDBRow>
        <MDBCol size='md'>
         
        </MDBCol>
        <MDBCol size='md'>
        <h4>EmailId:{userEmail}</h4>
        </MDBCol>
        <MDBCol size='md'>
        <h4>CandidateId:{candidateId}</h4>
        </MDBCol>
      </MDBRow>
    </div>
  );
}