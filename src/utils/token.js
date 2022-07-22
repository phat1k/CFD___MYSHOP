export const TOKEN_STORAGE_KEY = 'token'
export const USER_STORAGE_KEY = 'user'

export const setToken = (data) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(data))
}
export const getToken = () => {
    let token = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (token) {
        token = JSON.parse(token)
    }

    return token
}

export const clearToken = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
}


export const setUser = (data) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data))
}

export const getUser = () => {
    let user = localStorage.getItem(USER_STORAGE_KEY)
    if(user){
        user = JSON.parse(user)
    }
    return user
}

export const clearUser = () => {
    localStorage.removeItem(USER_STORAGE_KEY)
}