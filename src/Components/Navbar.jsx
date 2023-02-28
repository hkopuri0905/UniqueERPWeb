import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBNavLink,
  MDBFooter,
  MDBListGroup,
  MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

export default function NavigationBar({ userEmail, candidateId, handleLogout }) {

  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <div className='navBarHome'>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src={require('./file.png')}
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
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
      <MDBRow style={{ textAlign: 'left' }}>
        <MDBCol size='md'>

        </MDBCol>
        <MDBCol size='sm'>
          <h5>Email-Id:{userEmail}</h5>
        </MDBCol>
        <MDBCol size='sm'>
          <h5>CandidateId:{candidateId}</h5>
        </MDBCol>
      </MDBRow>
      <MDBFooter style={{ width: '70%', margin: '0 auto', bottom: '0' }} className='text-center' color='white' bgColor='dark'>
        <span><h3>If you have any questions, please visit our <a href="https://contingentpros.com/faqs">FAQ</a></h3></span>
      </MDBFooter>
  
    </div>
    
  );
  }
  