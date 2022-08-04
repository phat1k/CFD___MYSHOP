import api, { API } from "../constants/api"


const profileService = {
    getWishlist(){
        return api.get(`/ecommerce/v1/profile/wishlist`)
    },
    addWishlist(id){
        return api.post(`/ecommerce/v1/profile/wishlist/${id}`)

    },
    removeWishlist(id){
        return api.delete(`/ecommerce/v1/profile/wishlist/${id}`)
    }
        
}
export default profileService