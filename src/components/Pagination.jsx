import React from 'react'
import {useQueryUrl} from "../hook/useQueryUrl"
import {Link } from "react-router-dom"

export default function Pagination({totalPage}) {
    const search = useQueryUrl()
    const currentPage = parseInt(search.get('page') || "1")
    console.log(`currentPage`, currentPage)

    const rederPage = () => {
        if(totalPage <= 1) return null
        let start = currentPage - 2,
            end = currentPage + 2
        if(start < 1){
            start = 1
            end = 5
        }
        if(end > totalPage){
            end = totalPage
            start = end - 4
            if(start < 1) start = 1
        }

        let list = []

        for (let i = start; i <= end; i++){

            search.set(`page`, i)
            const path =  search.toString()

            list.push(<li key={i} class={`page-item ${i === currentPage ? 'active' : ''}`}>
            <Link class="page-link" to={`?${path}`}>{i}</Link>
        </li>)
        }
        return list
    }

    search.set(`page`, currentPage - 1)
    const pathPrev = '?' + search.toString()

    search.set(`page`, currentPage + 1)
    const NextPrev = '?' + search.toString()
    
    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                {currentPage > 1 && (
                    <li className="page-item">
                    <Link className="page-link page-link-arrow" to={pathPrev}>
                        <i className="fa fa-caret-left" />
                    </Link>
                </li>
                )}
               {rederPage()}
              {
                  currentPage < totalPage && (
                    <li className="page-item">
                    <Link className="page-link page-link-arrow" to={NextPrev}>
                        <i className="fa fa-caret-right" />
                    </Link>
                </li>
                  )
              }
            </ul>
        </nav>
    )
}
