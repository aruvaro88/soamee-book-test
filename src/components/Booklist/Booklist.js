import React, { useEffect, useState } from "react"
import "./Booklist.css"
import { getAllBooks } from "../../Services/books/booksService"
import { BookCard } from "../bookCard/BookCard"
import { Link } from "react-router-dom"

export const Booklist = () => {
  //Creamos el estado del componente con el cual interactuaremos para mostrar el listado de libros
  const [books, setBooks] = useState([])
  //Creamos otro estado donde controlaremos es mostrado o no. Por defecto es false porque no se muestra contenido
  const [show, setShow] = useState(false)

  useEffect(() => {
    //Funcion que se ejectuta al renderizar el componente. Llamamos a la funcion getAllBooks para ejecutar la llamada a la API
    //y obtener la informacion de los libros
    getAllBooks().then((books) => {
      //Actualizamos el estado con la informacion que nos llega de la api
      setBooks(books)
      //Actualizamos el estado de setShow a true, ya que si tenemos contenido para mostrar
      setShow(true)
    })
  }, [])
  //Al poner [] en la dependencia del useEffect le estamos diciendo que solo se ejecute con el primer renderizado del componente

  return (
    <>
      {!show ? ( //Renderizado condicional para mostrar un "Loading..." mientras nos llega la respuesta de la api
        <div className="loading-container">
          <h1 className="loading">Loading...</h1>
        </div>
      ) : (
        <>
          <div className="booklist-header">
            <h1>Book List</h1>
            <Link className="home-button" to="/createbook">
              Create Book
            </Link>
          </div>
          <div className="content-container">
            {/* Con map recorremos el array books del estado para leer la informacion y renderizarla en nuestro componente */}
            {books.map((book) => (
              //Renderizamos un nuevo componente con cada elemento del array, y le pasamos las propiedades del objeto en cuestión
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
