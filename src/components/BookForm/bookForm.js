import React, { useState } from "react"
import { createBook } from "../../Services/books/booksService"

export const BookForm = () => {
  //Creamos un estado para controlar la informacion del libro a crear
  const [newBook, setNewBook] = useState("")

  const handleChange = (event) => {
    //Vamos actualizando el estado con el valor contenido en el imput del form
    setNewBook(event.target.value)
  }

  const handleSubmit = (event) => {
    //Funcion que se ejecuta cuando se hace el submit del formulario. Para evitar recarga usamos el preventDefault()
    event.preventDefault()
    //Declaramos el objeto nuevo que se va a crear con el submit. En title ponemos el valor que introduce el usuario en el imput
    const bookToAdd = {
      albumId: 1,
      title: newBook,
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    }
    //Llamamos a la api que ejecuta la funcion de crear un nuevo libro
    createBook(bookToAdd)
      .then((response) => {
        //Vaciamos el estado para que se reinicie el valor del input
        setNewBook("")
      })
      .catch((err) => {
        //Manejamos por consola si hay algun error en la creacion
        console.log("Error creating book", err)
      })
  }
  return (
    <>
      <form className="create-book-form" onSubmit={handleSubmit}>
        <p>Type new book's title</p>
        <input type="text" onChange={handleChange} value={newBook}></input>
        <button>Create new book</button>
      </form>
    </>
  )
}
