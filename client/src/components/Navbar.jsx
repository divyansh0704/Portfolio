import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/admin/add-project">Admin</Link>
    </nav>
  )
}

export default Navbar