import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className="header_content">
            <div className="header_left">
                <div className="header_left_content">
                    <Link to={'/'} className="link">
                        <h1>The Bookstore</h1>
                    </Link>
                </div>
            </div>
            <div className="header_right">
                <div className="header_right_content">
                    <Link to={'/'} className="link"><i><HiOutlineShoppingCart/></i></Link>
                    <Link to={'/'} className="link"><i><BsPersonCircle/></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header