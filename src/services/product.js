import api, { API } from "../constants/api"


const productService = {
    getProduct(query = ''){
        // return fetch (`${API}/product${query}`).then(res => res.json())
        return api.get(`/product${query}`)
    },
    getCategory(){
        return api.get('/categories')
    }
}
export default productService