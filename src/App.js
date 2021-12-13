import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/home"
import { Booklist } from "./components/Booklist/Booklist"
import { Navbar } from "./components/Navbar/Navbar"
import { AuthorList } from "./components/authorList/AuthorList"
import { BookForm } from "./components/BookForm/bookForm"
import { BookDetails } from "./components/BookDetails/BookDetails"
import { AuthorDetail } from "./components/authorDetail/AuthorDetail"
import { AuthorForm } from "./components/authorForm/AuthorForm"

function App() {
  return (
    //Encapsulamos las rutas en el BrowserRouter para permitir la navegación
    //Dentro de la etiqueta Routes ponemos las rutas navegables que va a tener nuestra app
    //En este caso el componente Navbar queda fuera ya que siempre será visible en la app
    //En las rutas de detalle incluimos el :id ya que va a ser un elemento cambiante de la ruta y lo capturaremos en el componente
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Booklist />}></Route>
        <Route path="/createbook" element={<BookForm />}></Route>
        <Route path="/bookdetail/:id" element={<BookDetails />}></Route>
        <Route path="/authors" element={<AuthorList />}></Route>
        <Route path="/createauthor" element={<AuthorForm />}></Route>
        <Route path="/authordetail/:id" element={<AuthorDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
