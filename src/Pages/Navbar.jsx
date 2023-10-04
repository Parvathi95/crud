import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
   const [isMobile,setIsMobile]=useState(false);
  return (
    <nav className='navbar'>
        <h2 className='logo'>CRUD OPERATION</h2>
        <ul className={isMobile?'nav-links-mob':'nav-links'} onClick={()=>setIsMobile(false)}>
            <Link to="/create" className='create'><li>Create</li></Link>
            <Link to="/read" className='read'><li>Read</li></Link>
            <Link to="/update" className='update'><li>Update</li></Link>
            <Link to="/signup" className='signup'><li>SignUp</li></Link>
             </ul>
             <button className='mob-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
                {isMobile?<h1>x</h1>:<h1>=</h1>}
             </button>
    </nav>
  )
}

export default Navbar