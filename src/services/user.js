import api, { API } from "../constants/api"

const userService = {
    getInfo(){
        // return fetch (`${API}/login`, data)
        return api.get(`/user/get-info`)
    }
}
export default userService