import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Enter text</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/vocabulary">Vocabulary</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavbarComponent
