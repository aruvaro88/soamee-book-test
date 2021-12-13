import React, { useState } from "react"
import { createAuthor } from "../../Services/authors/authorService"

export const AuthorForm = () => {
  const [newAuthor, setNewAuthor] = useState("")

  const handleChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const authorToAdd = {
      userId: 1,
      title: newAuthor,
    }
    createAuthor(authorToAdd)
      .then((response) => {
        setNewAuthor("")
      })
      .catch((err) => {
        console.log("Error creating author", err)
      })
  }
  return (
    <>
      <form className="create-author-form" onSubmit={handleSubmit}>
        <p>Type new author's name</p>
        <input type="text" onChange={handleChange} value={newAuthor}></input>
        <button>Create new author</button>
      </form>
    </>
  )
}
