import axios from 'axios';

export const key = 'af558cb07390cecc3ca9fde4a6805f3ee04ae6a4'

const api =axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization':`Bearer ${key}`
    }
})

export default api
