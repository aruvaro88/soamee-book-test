import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-text">
          <h1>Soamee Book Store</h1>
        </div>
      </div>
      <div className="content-container">
        <div className="content-description">
          <p className="description">
            In this books stores ksjdhadflaksdhflkasdhfjñlkasjdfñlkjasñdlkfjsñlkfjñlaskjfdlñsakjflksdflñkjsf
            lskjdafhsakljhflkasjdflkjasflkjhaskldfjhaslkjfhaskljdfhalskjfhaklsdjhflakshflkjshf
            sjdhfgalskjfhlaksjhflñaskhfñlsakhdfñlshfñlashfñashfdñshfj
          </p>
        </div>
        <div className="content-buttons">
          <Link className="home-button" to="/books">
            Book List
          </Link>
          <Link className="home-button" to="/authors">
            Author List
          </Link>
        </div>
      </div>
    </>
  )
}
