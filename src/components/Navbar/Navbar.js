import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/authors">Authors</Link>
    </>
  )
}
