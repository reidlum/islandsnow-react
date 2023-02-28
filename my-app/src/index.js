import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill/> </Nav.Link>
        <Nav.Link><Search/> </Nav.Link>
        <Nav.Link><PersonFill/> </Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <h1><img src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" alt="Island Snow Logo" className="img-fluid rounded mx-auto d-block py-1"/></h1>
);

const MiddleMenu = () => (
  <Navbar expand="lg">
    <Container className="justify-content-center pt-4">
      <Nav className="justify-content-end">
        <NavDropdown title="MEN" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="WOMEN" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="KIDS" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="BRANDS" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <Nav.Link className="px-3">SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const FullWidthImage = () => (
  <div className="row justify-content-center">
    <img src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" className="img-fluid" alt="Island Snow"/>
  </div>
);

const FooterMenu = () => (
  <footer>
  <div className="container">
    <div className="row pt-3">
      <div className="col">
        NAVIGATION
        <hr/>
        <Nav.Link className="pb-2">About Us</Nav.Link>
        <Nav.Link className="pb-2">Employment</Nav.Link>
        <Nav.Link className="pb-2">Videos</Nav.Link>
      </div>
      <div className="col">
        MAIN MENU
        <hr/>
        <Nav.Link className="pb-2">Men</Nav.Link>
        <Nav.Link className="pb-2">Women</Nav.Link>
        <Nav.Link className="pb-2">Kids</Nav.Link>
      </div>
      <div className="col">
        CONNECT
        <hr/>
        <div className="pb-2">Sign up for latest updates</div>
        <input type="text" placeholder="Enter Email Address"/>
        <div className="btn btn-dark">Join</div>
      </div>
    </div>
  </div>
    </footer>
);

const IslandSnow = () => (
  <Container>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);