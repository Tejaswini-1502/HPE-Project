import React from 'react'
import { MdArrowDropDown } from "react-icons/md"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_content">
          <ul>
            <li className='genre'><Link to={'/'} className="link">Genres<i style={{fontSize:'21px'}}><MdArrowDropDown/></i></Link>
              <ul className='genre_dropdown'>
                <li><Link to={'/'} className="link">Action</Link></li>
                <li><Link to={'/'} className="link">Adventure</Link></li>
                <li><Link to={'/'} className="link">Classics</Link></li>
                <li><Link to={'/'} className="link">Fantasy</Link></li>
                <li><Link to={'/'} className="link">Fiction</Link></li>
                <li><Link to={'/'} className="link">Literature</Link></li>
                <li><Link to={'/'} className="link">Mystery</Link></li>
                <li><Link to={'/'} className="link">Mythology</Link></li>
                <li><Link to={'/'} className="link">Romance</Link></li>
                <li><Link to={'/'} className="link">Politics</Link> </li>
              </ul>
            </li>
            <li><Link to={'/'} className="link">New Arrivals</Link></li>
            <li><Link to={'/'} className="link">Best Sellers</Link></li>
            <li><Link to={'/'} className="link">Award Winners</Link></li>
            <li><Link to={'/'} className="link">Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar