import React, { useEffect, useState } from "react"
import "./Booklist.css"
import { getAllBooks, createBook } from "../../Services/books/booksService"
import { BookCard } from "../BookCard/bookCard"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export const Booklist = () => {
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState("")

  useEffect(() => {
    getAllBooks().then((books) => {
      setBooks(books)
    })
  })
  

  return (
    <>
      <h1>Book List</h1>
      <Link to="/createbook">
        <Button>Crear libro</Button>
      </Link>
      <ul>
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </ul>
    </>
  )
}
