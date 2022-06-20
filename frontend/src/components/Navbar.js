import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_content">
          <Nav>
            <NavDropdown title="Genres">
              <NavDropdown.Item href='/search/action'>Action</NavDropdown.Item>
              <NavDropdown.Item href='/search/adventure'>Adventure</NavDropdown.Item>
              <NavDropdown.Item href='/search/fantasy'>Fantasy</NavDropdown.Item>
              <NavDropdown.Item href='/search/fiction'>Fiction</NavDropdown.Item>
              <NavDropdown.Item href='/search/literature'>Literature</NavDropdown.Item>
              <NavDropdown.Item href='/search/mystery'>Mystery</NavDropdown.Item>
              <NavDropdown.Item href='/search/mythology'>Mythology</NavDropdown.Item>
              <NavDropdown.Item href='/search/romance'>Romance</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/search/all'>All Books</Nav.Link>
            <Nav.Link href='/search/bestsellers'>Best Sellers</Nav.Link>
            <Nav.Link href='/search/awardwinners'>Award Winners</Nav.Link>
            <Nav.Link href='/'>Contact</Nav.Link>
          </Nav>
        </div>
    </div>
  )
}

export default Navbar