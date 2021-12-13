import React from "react"
import "./home.css"
import { Link } from "react-router-dom"

export const Home = () => {
  //Componente que funciona como pagina principal. Podemos acceder al listado de libros y al listado de autores
  //desde los botones correspondientes.
  return (
    <>
      <div className="header-container">
        <div className="header-text">
          <h1>Soamee Book Store</h1>
        </div>
      </div>
      <div className="content-container">
        <div className="content-description">
          <p className="description">
            In our bookstore you will find the best selection of books. You can browse through the entire catalog and see the information of each
            book. Also in our authors section you can find all the names. If you think that any book or author is missing, please feel free to create
            them yourself in the corresponding section.
          </p>
        </div>
        <div className="content-buttons">
          <Link className="home-button" to="/books">
            Book List
          </Link>
          <Link className="home-button" to="/authors">
            Author List
          </Link>
        </div>
      </div>
    </>
  )
}
