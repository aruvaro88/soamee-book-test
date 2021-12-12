import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="links-container">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/books">
            Books
          </Link>
          <Link className="link" to="/authors">
            Authors
          </Link>
        </div>
      </div>
    </>
  )
}
