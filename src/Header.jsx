import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/01/Call-icon-on-transparent-background-PNG.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
            <span className='text-light'>Contact Manager</span>
          </Navbar.Brand>
           <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-light'>
              <Link to="/" style={{textDecoration:'none',margin:"10px"}}>Home</Link><br />
              <Link to="/Contact" style={{textDecoration:'none',margin:"10px"}}>Contact List</Link><br />
              <Link to="/Help" style={{textDecoration:'none',margin:"10px"}}>
                Help
              </Link><br />
            </NavDropdown>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header