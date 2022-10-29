/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:
        'https://spacex-2438b-default-rtdb.europe-west1.firebasedatabase.app/',
})

const DataAPI = {
    // Получить данные
    getData() {
        return axiosInstance.get(`data.json`).then((response) => response.data)
    },
}

export default DataAPI
