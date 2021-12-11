import React from "react"
import "./home.css"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <h1>Soamee Book Store</h1>
      <Link to="/books">
        <Button className="primary">Ver libros</Button>
      </Link>
      <Link to="/authors">
        <Button className="primary">Ver autores</Button>
      </Link>
    </>
  )
}
