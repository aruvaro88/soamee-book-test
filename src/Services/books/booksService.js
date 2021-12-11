import axios from "axios"

export const getAllBooks = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
    const { data } = response
    return data
  })
}

export const createBook = () => {
  return axios.post("https://jsonplaceholder.typicode.com/photos").then((response) => {
    const { data } = response
    return data
  })
}