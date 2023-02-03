import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function NavigationBar({ changeDisplay }) {

  return (
    <Row>
      <Col md={3} onClick={() => changeDisplay("home")}>
        <Button className="navigation_item">Home </Button>
      </Col>
      <Col md={3} onClick={() => changeDisplay("myReferrals")}>
        <Button className="navigation_item">Referrals </Button>
      </Col>
      <Col md={3} onClick={() => changeDisplay("invite")}>
        <Button className="navigation_item">Invite</Button>
      </Col>
    </Row>
  );
}