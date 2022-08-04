import api, { API } from "../constants/api"

const authServicee = {
    // refreshToken(data){
    //     return fetch (`${API}/refresh-token`, data)
    // },
    refreshToken(data) {
        return api.post('/refresh-token', data)
    },
    login(data){
        // return fetch (`${API}/login`, data)
        return api.post(`/login`, data)
    },
    register(data){
        // return fetch (`${API}/login`, data)
        return api.post(`/register`, data)
    }
}
export default authServicee