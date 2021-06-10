import axios from 'axios'

const instanceFilms = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {
    accept: 'application/json'
  }
})

const instanceDocuments = axios.create({
  baseURL: 'https://host1.medsafe.tech:40443/api',
  headers: {
    accept: 'application/json'
  }
})

export default { instanceFilms, instanceDocuments }