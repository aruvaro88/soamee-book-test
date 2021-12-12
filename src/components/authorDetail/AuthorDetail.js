import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAuthorDetails } from "../../Services/authors/authorService"

export const AuthorDetail = () => {
  const [author, setAuthor] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getAuthorDetails(id).then((author) => {
      setAuthor(author)
    })
  }, [id])

  return (
    <>
      <h1>Author name: {author.title}</h1>
    </>
  )
}
