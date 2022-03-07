import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PRODUCTS_API_URL,
  });


export default instance;