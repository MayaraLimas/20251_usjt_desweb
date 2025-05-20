import axios from 'axios'
// chamando a funcao creat e passando um paramentro js({})
export default axios.create({
    baseURL: 'https://api.pexels.com/v1/', 
    headers: {
        Authorization: import.meta.env.VITE_PIXELS_KEY
    }
})