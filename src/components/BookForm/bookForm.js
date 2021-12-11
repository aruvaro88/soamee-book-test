import React, { useState } from "react"
import { createBook } from "../../Services/books/booksService"

export const BookForm = () => {
  const [newBook, setNewBook] = useState("")

  const handleChange = (event) => {
    setNewBook(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const bookToAdd = {
      albumId: 1,
      title: newBook,
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    }
    createBook(bookToAdd)
    setNewBook("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newBook}></input>
        <button>Crear libro</button>
      </form>
    </>
  )
}
