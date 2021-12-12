import React, { useEffect, useState } from "react"
import "./BookDetails.css"
import { useParams } from "react-router-dom"
import { getBookDetails } from "../../Services/books/booksService"
import { getAuthorDetails } from "../../Services/authors/authorService"

export const BookDetails = () => {
  const [book, setBook] = useState([])
  const [author, setAuthor] = useState([])

  const { id } = useParams()

  useEffect(() => {
    let isMounted = true
    getBookDetails(id).then((book) => {
      if (isMounted) {
        setBook(book)
        getAuthorDetails(book.albumId).then((author) => {
          setAuthor(author)
        })
      }
    })

    return () => {
      isMounted = false
    }
  }, [id])
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
