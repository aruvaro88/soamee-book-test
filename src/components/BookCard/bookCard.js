import React from "react"
import "./BookCard.css"
import { Link } from "react-router-dom"

export const BookCard = ({ id, title, thumbnailUrl }) => {
  //Recogemos las propiedades del objeto que vamos a usar en el componente

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
