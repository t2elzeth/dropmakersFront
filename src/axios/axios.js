import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.dropmakers.org:8920'
})

export const auth = axios.create({
  baseURL: 'https://api.dropmakers.org:8920/api/v1/auth',
  headers: {
    Authorization: localStorage.getItem("token")
  }
})

export const ebay = axios.create({
  baseURL: 'https://api.dropmakers.org:8920/ebay'
})

export const payments = axios.create({
  baseURL: 'https://api.dropmakers.org:8920/api/v1/payments'
})

