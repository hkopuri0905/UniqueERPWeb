import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar({changeDisplay}) {

  return (
    <Navbar id = "nav" bg="blue" expand="lg">
      <Container>
        <div onClick={()=>changeDisplay("home")}>
          Home
        </div>
        <div onClick={()=>changeDisplay("myReferrals")}>
          Referrals
        </div>
        <div onClick={()=>changeDisplay("invite")}>
          Invite
        </div>
      </Container>
    </Navbar>
  );
}