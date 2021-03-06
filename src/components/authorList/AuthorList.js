import React, { useState, useEffect } from "react"
import "./AuthorList.css"
import { Link } from "react-router-dom"
import { getAllAuthors } from "../../Services/authors/authorService"
import { AuthorCard } from "../authorCard/AuthorCard"

export const AuthorList = () => {
  const [authors, setAuthors] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    getAllAuthors().then((authors) => {
      setAuthors(authors)
      setShow(true)
    })
  })

  return (
    <>
      {!show ? (
        <div className="loading-container">
          <h1 className="loading">Loading...</h1>
        </div>
      ) : (
        <>
          <div className="authorlist-header">
            <h1>Author List</h1>
            <Link className="home-button" to="/createauthor">
              Create Author
            </Link>
          </div>
          <div className="content-container">
            {authors.map((author) => (
              <AuthorCard key={author.id} {...author} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
