import axios from 'axios'

const instance = axios.create({
    baseURL:'https://nurik9832.pythonanywhere.com'
})
export default instance;