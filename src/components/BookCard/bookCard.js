import React from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export const BookCard = ({ id, title, thumbnailUrl }) => {
  return (
    <>
      <li>
        <img src={thumbnailUrl} alt="small"></img>
        <h4>{title}</h4>
        <Link to={`/bookdetail/${id}`}>
          <Button>Go to detail</Button>
        </Link>
      </li>
    </>
  )
}
