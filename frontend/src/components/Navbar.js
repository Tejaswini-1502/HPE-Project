import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_content">
          <Nav>
            <NavDropdown title="Genres">
              <NavDropdown.Item href='/'>Action</NavDropdown.Item>
              <NavDropdown.Item href='/'>Adventure</NavDropdown.Item>
              <NavDropdown.Item href='/'>Fantasy</NavDropdown.Item>
              <NavDropdown.Item href='/'>Fiction</NavDropdown.Item>
              <NavDropdown.Item href='/'>Literature</NavDropdown.Item>
              <NavDropdown.Item href='/'>Mystery</NavDropdown.Item>
              <NavDropdown.Item href='/'>Mythology</NavDropdown.Item>
              <NavDropdown.Item href='/'>Romance</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/'>New Arrivals</Nav.Link>
            <Nav.Link href='/'>Best Sellers</Nav.Link>
            <Nav.Link href='/'>Award Winners</Nav.Link>
            <Nav.Link href='/'>Contact</Nav.Link>
          </Nav>
        </div>
    </div>
  )
}

export default Navbar