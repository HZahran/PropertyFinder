import axios from 'axios'

const BASE_URL = 'https://www.propertyfinder.ae/mobileapi'

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export default {

    fetchPropertyList: (page, order) => {
        return axiosInstance.get('/', { params: { page, order } })
    }
}