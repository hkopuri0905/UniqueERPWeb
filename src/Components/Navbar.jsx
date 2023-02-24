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
  MDBNavLink 
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

export default function NavigationBar() {

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

  return (
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
              <MDBNavbarLink><Link to="/">Logout</Link> 
              </MDBNavbarLink >
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}