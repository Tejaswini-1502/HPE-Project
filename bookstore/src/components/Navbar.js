import React from 'react'
import { MdArrowDropDown } from "react-icons/md"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_content">
          <ul>
            <li className='genre'><a href="/">Genres<i style={{fontSize:'21px'}}><MdArrowDropDown/></i></a>
              <ul className='genre_dropdown'>
                <li><a href="/">Action</a></li>
                <li><a href="/">Adventure</a></li>
                <li><a href="/">Classics</a></li>
                <li><a href="/">Fantasy</a></li>
                <li><a href="/">Fiction</a></li>
                <li><a href="/">Literature</a></li>
                <li><a href="/">Mystery</a></li>
                <li><a href="/">Mythology</a></li>
                <li><a href="/">Romance</a></li>
                <li><a href="/">Politics</a> </li>
              </ul>
            </li>
            <li><a href="http://localhost:3000/">New Arrivals</a></li>
            <li><a href="http://localhost:3000/">Best Sellers</a></li>
            <li><a href="http://localhost:3000/">Award Winners</a></li>
            <li><a href="http://localhost:3000/">Contact</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar