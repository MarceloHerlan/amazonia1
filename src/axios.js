import axios from 'axios'

const intance=axios.create({
    baseURL:'http://localhost:5001/a-495c2/us-central1/api'
})

export default intance