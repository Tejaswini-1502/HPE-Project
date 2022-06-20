import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsPersonCircle } from "react-icons/bs";
import { MdLogin } from 'react-icons/md'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

function Header() {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className='header'>
        <div className="header_content">
            <div className="header_left">
                <div className="header_left_content">
                    <Link to={'/'} className="link">
                        <h1>BookPoint.</h1>
                    </Link>
                </div>
            </div>
            <div className="header_right">
                <div className="header_right_content">
                    <Nav className='ml-auto'>
                        <Nav.Link href='/cart' className="link"><i><HiOutlineShoppingCart/></i></Nav.Link>
                        {userInfo ? (
                            <NavDropdown title={<i><BsPersonCircle/></i>} className="link1">
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : <Nav.Link href='/login' className="link"><i><MdLogin/></i></Nav.Link>}
                    </Nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header