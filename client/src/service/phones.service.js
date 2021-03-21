import axios from 'axios'

class PhonesService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/telefonos`,
            withCredentials: true
        })
    }

    getPhones = () => this.api.get('/')
    getOnePhone = phone_id => this.api.get(`/getOnePhone/${phone_id}`)
}

export default PhonesService