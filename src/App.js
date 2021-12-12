import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/home/Home"
import { Booklist } from "./components/bookList/Booklist"
import { Navbar } from "./components/navbar/Navbar"
import { AuthorList } from "./components/authorList/AuthorList"
import { BookForm } from "./components/bookForm/BookForm"
import { BookDetails } from "./components/bookDetails/BookDetails"
import { AuthorDetail } from "./components/authorDetail/AuthorDetail"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Booklist />}></Route>
        <Route path="/createbook" element={<BookForm />}></Route>
        <Route path="/bookdetail/:id" element={<BookDetails />}></Route>
        <Route path="/authors" element={<AuthorList />}></Route>
        <Route path="/authordetail/:id" element={<AuthorDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
