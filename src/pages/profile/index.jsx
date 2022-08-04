import React, { useEffect, useState } from 'react'
import { WishListCard } from '../../components/WishListCard'
import profileService from '../../services/profile'


export default function Wishlist() {
    const [product, setProduct] = useState()
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = () => {
        profileService.getWishlist().then( res =>{
            setProduct(res.data)
            console.log('res', res)
        })
    }
 
    return (
        <div>
        <section className="pt-7 pb-12">
          <div className="container">
            <div className="row">
                
              <div className="col-12 text-center">
                {/* Heading */}
                <h3 className="mb-10">My Account</h3>
              </div>
            </div>
            <div className="row">
                
              <div className="col-12 col-md-3">
                {/* Nav */}
                <nav className="mb-10 mb-md-0">
                  <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
                      Orders
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle active" href="account-wishlist.html">
                      Widhlist
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-personal-info.html">
                      Personal Info
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                      Addresses
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                      Payment Methods
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle" href="#!">
                      Logout
                    </a>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                {/* Products */}
                <div className="row">
                {
                    product && product.map(e =><WishListCard onRemove={fetchData} key={e._id} product={e.product}/>)
                }
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}
