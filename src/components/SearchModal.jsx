import React, { useEffect, useState } from 'react'
import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import productService from '../services/product'
import {currency} from "../utils/currency"
import { Link } from 'react-router-dom'
import { PRODUCT_CATEGORY_PATH, PRODUCT_DETAIL_PATH, PRODUCT_PATH } from '../constants/path'

export const SearchModal = () => {
    const dispatch = useDispatch()
    const { visible } = useSelector(store => store.OpenRe)
    const [search, setSearch] = useState("")
    const [cat, setCat] = useState("")
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState()
    useEffect(()=>{
        productService.getCategory()
        .then(res=>{
            setCategory(res)
        })
    },[])
   
    const onSearch = async (ev) => {
        ev.preventDefault()
        // console.log(search)
        if (search?.trim()) {
            const data = await productService.getProduct(`?limit=5&name=${search}`+ (cat ? `&categories=${cat}`: ""))
            setProducts(data.data)
        }
    }

    const categoryy = cat ? category.find(e => e.id === parseInt(cat)) : null

    const linkAll =  (categoryy ?`/${categoryy.slug}` : PRODUCT_PATH)+ '?' + new URLSearchParams('?q=' + search).toString()
    console.log("catttttttttttt",cat , category)
    console.log('new', new URLSearchParams('?q=' + search).toString())
    const first = () => {
        console.log("askdgnasidug")
        dispatch({ type: "CLOSE_CARD" })
    }

    return (
        <Drawer visible={visible} width={453}
            bodyStyle={{ padding: 0 }}
            closeIcon={null}
            headerStyle={{ display: 'none' }}
            onClose={() => dispatch({ type: "CLOSE_CARD" })}
        >
            <div>
                {/* Search */}
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" onClick={first} className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Search Products</strong>
                    </div>
                    {/* Body: Form */}
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="modalSearchCategories">Categories:</label>
                                <select value={cat} onChange={(ev)=> setCat(ev.target.value)} className="custom-select" id="modalSearchCategories">
                                    <option selected>All Categories</option>
                                    {category && category. map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
                                    
                                </select>
                            </div>
                            <div className="input-group input-group-merge">
                                <input value={search} onChange={(ev) => setSearch(ev.target.value)} className="form-control" type="search" placeholder="Search" />
                                <div className="input-group-append">
                                    <button onClick={onSearch} className="btn btn-outline-border" type="submit">
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Body: Results (add `.d-none` to disable it) */}
                    <div className="modal-body border-top font-size-sm">
                        {/* Heading */}
                        <p>Search Results:</p>
                        {
                            products.lenght === 0 ? (
                                // <div className="modal-body">
                                //     {/* Text */}
                                //     <p className="mb-3 font-size-sm text-center">
                                //         Nothing matches your search
                                //     </p>
                                //     <p className="mb-0 font-size-sm text-center">
                                //         😞
                                //     </p>
                                // </div>
                                <h2>áoidfhoáihdfpoáihdfpoáidhf</h2>
                            ) : products.map(e => (
                                <div key={e._id} className="row align-items-center position-relative mb-5">
                                    <div className="col-4 col-md-3">
                                        {/* Image */}
                                        <img className="img-fluid" src={e.images?.[0]?.thumbnail_url} alt="..." />
                                    </div>
                                    <div className="col position-static">
                                        {/* Text */}
                                        <p className="mb-0 font-weight-bold">
                                            <a className="stretched-link text-body" href="./product.html">{e.name}</a> <br />
                                            <span className="text-muted">{currency(e.real_price)}</span>
                                        </p>
                                    </div>
                                </div>))
                        }
                    
                        <Link className="btn btn-link px-0 text-reset" to={ linkAll}>
                            View All <i className="fe fe-arrow-right ml-2" />
                        </Link>
                    </div>
                    {/* Body: Empty (remove `.d-none` to disable it) */}
                 
                </div>

            </div>
        </Drawer>
    )
}
export default SearchModal