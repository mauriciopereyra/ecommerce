import axios from 'axios'

export const getItem = (itemID) => axios.get(`https://mauriciopereyra.com/ecommerce_api/item/${itemID}`)

export const getCategory = (categories,limit=null,random=false) => {
    return axios.get(`https://mauriciopereyra.com/ecommerce_api/category/${categories}${limit ? `?limit=${limit}` : ""}${random ? `?random=${random}` : ""}`)
}