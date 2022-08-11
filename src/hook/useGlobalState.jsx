import { createContext, useContext, useState } from "react";

const Context = createContext({})
const [IsOpenSearchModal, setIsOpenSearchModal] = useState(false)

export const GlobalStateProvider = ({children}) =>{
    return <Context.Provider value={{isOpenSearchModal, setIsOpenSearchModal}}>{children}</Context.Provider>
}
export const useGlobalState = () => useContext(Context)