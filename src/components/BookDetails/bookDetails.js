import React, { useEffect, useState } from "react"
import "./BookDetails.css"
import { useParams } from "react-router-dom"
import { getBookDetails } from "../../Services/books/booksService"
import { getAuthorDetails } from "../../Services/authors/authorService"

export const BookDetails = () => {
  //Creamos el estado para almacenar el libro que vamos a renderizar
  const [book, setBook] = useState([])
  //Creamos el estado para almacenar el autor del libro
  const [author, setAuthor] = useState([])
  //Capturamos el parametro de la url del navegador para usarlo como parametro en la llamada a la api
  const { id } = useParams()

  useEffect(() => {
    //Creamos la variable isMounted para saber que se monta el componente
    let isMounted = true
    getBookDetails(id).then((book) => {
      //Si el componente se renderiza actualizamos el estado con la informacion del libro
      if (isMounted) {
        setBook(book)
        //Una vez que tenemos el libro, usamos la propiedad albumId para capturar a que album (autor) pertenece
        getAuthorDetails(book.albumId).then((author) => {
          setAuthor(author)
        })
      }
    })

    return () => {
      //Dejamos la variable a false para determinar que el componente no se monta
      isMounted = false
    }
  }, [id]) //pasamos como argumento el id para determinar que el useEffect se dispara siempre y cuando cambie la id de la url
  return (
    <>
      <div className="page-container">
        <div className="detail-container">
          <div className="img-detail-container">
            <img className="book-img" src={book.url} alt="cover"></img>
          </div>
          <div className="data-container">
            <div className="title-text">
              <h2 className="title">{book.title}</h2>
            </div>
            <div className="author-text">
              <h4 className="author">{author.title}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
