import axios from 'axios'

const instance = axios.create({
    // baseUrl:`http://localhost:9000`,
    baseURL:"http://localhost:9000/messages",
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})
export default instance
// http://localhost:3001/