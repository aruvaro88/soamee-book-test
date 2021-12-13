import axios from "axios"

export const getAllBooks = () => {
  //Llamada GET que nos trae informacion de la api. En este caso todos los libros (photos)
  return axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
    const { data } = response
    return data
  })
}

export const getBookDetails = (id) => {
  //Llamada GET que nos trae informacion de la api. En este caso un libro especificamente(el id que vaya como parametro en la url)
  return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then((response) => {
    const { data } = response
    return data
  })
}

export const createBook = (newBook) => {
  //Llamada POST que crea un nuevo registro en la api. En este caso es para introducir los datos de un nuevo libro (photo)
  return axios.post("https://jsonplaceholder.typicode.com/photos", newBook).then((response) => {
    console.log(newBook)
    const { data } = response
    return data
  })
}
