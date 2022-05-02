import React from 'react'
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { HiMail } from 'react-icons/hi';

function Footer() {
  return (
    <div className='footer'>
      <p><span>
        <i><HiMail/></i>
        <i><MdFacebook/></i>
        <i><AiFillInstagram/></i>
        <i><RiWhatsappFill/></i>
        </span></p>
      <p>Copyright &copy; 2022. TheBookstore.com. All Rights Reserved</p>
    </div>
  )
}

export default Footer