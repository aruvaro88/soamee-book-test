import axios from "axios"

export const getAllAuthors = () => {
  //Llamada GET que nos trae informacion de la api. En este caso todos los autores (albums)
  return axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => {
    const { data } = response
    return data
  })
}

export const getAuthorDetails = (id) => {
  //Llamada GET que nos trae informacion de la api. En este caso un autor especificamente (el id que vaya como parametro en la url)
  return axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`).then((response) => {
    const { data } = response
    return data
  })
}

export const createAuthor = (newAuthor) => {
  //Llamada POST que crea un nuevo registro en la api. En este caso es para introducir los datos de un nuevo autor (album)
  return axios.post("https://jsonplaceholder.typicode.com/albums", newAuthor).then((response) => {
    console.log(newAuthor)
    const { data } = response
    return data
  })
}
