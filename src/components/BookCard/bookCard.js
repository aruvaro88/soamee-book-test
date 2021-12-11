import React from "react"

export const BookCard = ({ title, thumbnailUrl }) => {
  return (
    <>
      <li>
        <img src={thumbnailUrl} alt="small"></img>
        <h4>{title}</h4>
      </li>
    </>
  )
}
