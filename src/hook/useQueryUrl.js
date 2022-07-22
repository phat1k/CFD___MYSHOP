import { useMemo } from "react"
import { useLocation } from "react-router-dom"


export const useQueryUrl = () => {
    const {search} = useLocation()
    console.log(`search`, search)
    return new URLSearchParams(search)
}