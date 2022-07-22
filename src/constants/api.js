export const API = 'http://cfd-reactjs.herokuapp.com'
// export const api = axios.create({
//     baseURL: import.meta.env.VITE_HOST
// })
import axios from "axios";
import authService from "../services/auth";
import { getToken, setToken } from "../utils/token";

export const api = axios.create({
    baseURL: import.meta.env.VITE_HOST
})

let refreshPromise

api.interceptors.response.use((res) => {
    return res.data
}, async (error) => {
    if (error.response.status === 403 && error.response.data.error_code === 'TOKEN_EXPIRED') {
        const token = getToken()

        if (token) {
            if (!refreshPromise) {
                refreshPromise = authService.refreshToken({
                    refreshToken: token.refreshToken
                })
                const res = await refreshPromise
                if (res.data) {
                    token.accessToken = res.data.accessToken
                    setToken(token)
                }
                refreshPromise = null
            } else {
                await refreshPromise
            }
            return api(error.config)
        }
    }


    return error.response.data
})

api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }

    return config
})

export default api