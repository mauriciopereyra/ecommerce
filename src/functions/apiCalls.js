import axios from 'axios'

export const getItem = (itemID) => axios.get(`http://103.13.231.133:3001/item/${itemID}`)

export const getCategory = (categories,limit=null) => {
    return axios.get(`http://103.13.231.133:3001/category/${categories}${limit ? `?limit=${limit}` : ""}`)
}