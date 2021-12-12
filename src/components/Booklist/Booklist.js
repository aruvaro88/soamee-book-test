import React, { useEffect, useState } from "react"
import "./Booklist.css"
import { getAllBooks, createBook } from "../../Services/books/booksService"
import { BookCard } from "../bookCard/BookCard"
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
      <div className="booklist-header">
        <h1>Book List</h1>
        <Link className="home-button" to="/createbook">
          Create Book
        </Link>
      </div>
      <div className="content-container">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </>
  )
}
