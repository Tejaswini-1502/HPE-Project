import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <div className='header'>
        <div className="header_content">
            <div className="header_left">
                <div className="header_left_content">
                    <a href='/Home'>
                        <h1>The Bookstore</h1>
                    </a>
                </div>
            </div>
            <div className="header_right">
                <div className="header_right_content">
                    <a href="http://localhost:3000/"><i><HiOutlineShoppingCart/></i></a>
                    <a href="http://localhost:3000/"><i><BsPersonCircle/></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header