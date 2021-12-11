import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/home"
import { Booklist } from "./components/Booklist/Booklist"
import { Navbar } from "./components/Navbar/Navbar"
import { Authors } from "./components/Authors/Authors"
import { BookForm } from "./components/BookForm/bookForm"
import { BookDetails } from "./components/BookDetails/bookDetails"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Booklist />}></Route>
        <Route path="/createbook" element={<BookForm />}></Route>
        <Route path="/bookdetail/:id" element={<BookDetails />}></Route>
        <Route path="/authors" element={<Authors />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
