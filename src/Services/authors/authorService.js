import axios from "axios"

export const getAllAuthors = () => {
  return axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => {
    const { data } = response
    return data
  })
}

export const getAuthorDetails = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`).then((response) => {
    const { data } = response
    return data
  })
}