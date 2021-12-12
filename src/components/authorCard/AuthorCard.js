import React from "react"
import "./AuthorCard.css"
import { Link } from "react-router-dom"

export const AuthorCard = ({ id, title }) => {
  return (
    <>
      <div className="author-card-container">
        <div className="author-title-container">
          <h4 className="title-text">{title}</h4>
        </div>
        <div className="author-button-container">
          <Link className="card-button" to={`/authordetail/${id}`}>
            See details
          </Link>
        </div>
      </div>
    </>
  )
}
