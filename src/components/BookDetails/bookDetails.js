import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBookDetails } from "../../Services/books/booksService"

export const BookDetails = ({ id }) => {
  const [book, setBook] = useState([])
  //const { id } = props.match.params.id

  useEffect(() => {
    getBookDetails(id).then((book) => {
      setBook(book)
      console.log({ id })
    })
  })
  return <h1>soy los detalles del libro {book.id}</h1>
}
