import axios from 'axios'

let baseURL

switch (process.env.REACT_APP_ENV) {
  case 'production':
    baseURL = 'https://turnuson.nl/v1/api'
    break;
  default:
    baseURL = 'http://localhost:8000/api'
}
 
export const api = axios.create({
  baseURL,
  timeout: 24000
})
