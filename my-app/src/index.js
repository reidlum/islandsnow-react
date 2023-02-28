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
    <div className="row justify-content-center pt-4">
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle">
            <strong>MEN</strong>
          </div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle">
            <strong>WOMEN</strong>
          </div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle">
            <strong>KIDS</strong>
          </div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle">
            <strong>BRANDS</strong>
          </div>
        </div>
      </div>
      <div className="col-1">
        <strong>SEARCH</strong>
      </div>
    </div>
);

const FullWidthImage = () => (
  <div className="row justify-content-center pt-3">
    <img src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" className="img-fluid"/>
  </div>
);

const FooterMenu = () => (
  <footer>
  <div className="container">
    <div className="row pt-3\\">
      <div className="col">
        NAVIGATION
        <hr/>
        <div>About Us</div>
        <div>Employment</div>
        <div>Videos</div>
      </div>
      <div className="col">
        MAIN MENU
        <hr/>
        <div>Men</div>
        <div>Women</div>
        <div>Kids</div>
      </div>
      <div className="col">
        CONNECT
        <hr/>
        <div>Sign up for latest updates</div>
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