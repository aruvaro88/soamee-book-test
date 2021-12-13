import axios from "axios"

export const getAllBooks = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
    const { data } = response
    return data
  })
}

export const getBookDetails = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then((response) => {
    const { data } = response
    return data
  })
}

export const createBook = (newBook) => {
  return axios.post("https://jsonplaceholder.typicode.com/photos", newBook).then((response) => {
    console.log(newBook)
    const { data } = response
    return data
  })
}
