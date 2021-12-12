import React from "react"
import "./bookCard.css"
import { Link } from "react-router-dom"

export const BookCard = ({ id, title, thumbnailUrl }) => {
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img className="card-img" src={thumbnailUrl} alt="small"></img>
        </div>
        <div className="title-container">
          <h4 className="title-text">{title}</h4>
        </div>
        <div className="button-container">
          <Link className="card-button" to={`/bookdetail/${id}`}>
            See details
          </Link>
        </div>
      </div>
    </>
  )
}
