import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      {/* <div
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div> */}
      {/* <nav className={`nav-links ${menuOpen ? 'open' : ''}`}> */}
        <nav className='nav-links'>
        <Link className='k' to="/" >Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link className='k' to="/admin/add-project">Admin</Link>
      </nav>

    </div>
  )
}

export default Navbar