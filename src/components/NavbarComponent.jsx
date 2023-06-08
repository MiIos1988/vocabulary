import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Enter text</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vocabulary">Vocabulary</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavbarComponent
