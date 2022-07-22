import React from 'react'
import { ACCOUNT_PATH } from '../constants/path'
import {Link } from "react-router-dom"
export default function Header() {
    return (
        <div>
            <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    {/* Promo */}
                    <div className="mr-xl-8">
                        <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
                    </div>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="topbarCollapse">
                        {/* Nav */}
                        <ul className="nav nav-divided navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />United States
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">USD</a>
                                    <a className="dropdown-item" href="#!">EUR</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">English</a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#">English</a>
                                    <a className="dropdown-item" href="#">French</a>
                                    <a className="dropdown-item" href="#">German</a>
                                </div>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav mr-8">
                            <li className="nav-item">
                                <a className="nav-link" href="./shipping-and-returns.html">Shipping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./faq.html">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact-us.html">Contact</a>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-medium" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            {/* Brand */}
            <a className="navbar-brand" href="./overview.html">
              Shopper.
            </a>
            {/* Toggler */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* Nav */}
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  {/* Toggle */}
                  <a className="nav-link" data-toggle="dropdown" href="#">Home</a>
                  {/* Menu */}
                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index.html">Default</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index-classic.html">Classic</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index-simple.html">Simple</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index-landing.html">Landing</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  {/* Toggle */}
                  <a className="nav-link" data-toggle="dropdown" href="#">Catalog</a>
                  {/* Menu */}
                  <div className="dropdown-menu w-100">
                    {/* Tabs */}
                    <form className="mb-2 mb-lg-0 border-bottom-lg">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            {/* Nav */}
                            <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
                              <a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
                                Women
                              </a>
                              <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                Men
                              </a>
                              <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                Kids
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* Tab content */}
                    <div className="card card-lg">
                      <div className="card-body">
                        <div className="tab-content">
                          <div className="tab-pane fade show active" id="navTab">
                            <div className="container">
                              <div className="row">
                                <div className="col-6 col-md">
                                  {/* Heading */}
                                  <div className="mb-5 font-weight-bold">Clothing</div>
                                  {/* Links */}
                                  <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Dresses</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Denim</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Jeans</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Leggings</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  {/* Heading */}
                                  <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                  {/* Links */}
                                  <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Boots</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Heels</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Trainers</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Sandals</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Shoes</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  {/* Heading */}
                                  <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                  {/* Links */}
                                  <ul className="list-styled mb-0 font-size-sm">
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Accessories</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Luggage</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Belts</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Hats</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  {/* Heading */}
                                  <div className="mb-5 font-weight-bold">Collections</div>
                                  {/* Links */}
                                  <ul className="list-styled mb-0 font-size-sm">
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">All Collections</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Occasionwear</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Going Out</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Workwear</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Holiday Shop</a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a className="list-styled-link" href="./shop.html">Jean Fit Guide</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-4 d-none d-lg-block">
                                  {/* Card */}
                                  <div className="card">
                                    {/* Image */}
                                    <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                    {/* Overlay */}
                                    <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                      <div className="text-center">
                                        <a className="btn btn-white stretched-link" href="./shop.html">
                                          Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  {/* Toggle */}
                  <a className="nav-link" data-toggle="dropdown" href="#">Shop</a>
                  {/* Menu */}
                  <div className="dropdown-menu" style={{minWidth: '650px'}}>
                    <div className="card card-lg">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            {/* Heading */}
                            <div className="mb-5 font-weight-bold">Shop</div>
                            {/* Links */}
                            <ul className="list-styled mb-7 font-size-sm">
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./shop.html">Default</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                              </li>
                            </ul>
                            {/* Heading */}
                            <div className="mb-5 font-weight-bold">Product</div>
                            {/* Links */}
                            <ul className="list-styled font-size-sm">
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./product.html">Default</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            {/* Heading */}
                            <div className="mb-5 font-weight-bold">Support</div>
                            {/* Links */}
                            <ul className="list-styled mb-7 font-size-sm">
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./checkout.html">Checkout</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                              </li>
                            </ul>
                            {/* Heading */}
                            <div className="mb-5 font-weight-bold">Account</div>
                            {/* Links */}
                            <ul className="list-styled font-size-sm">
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-order.html">Order</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-orders.html">Orders</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-address.html">Addresses</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            {/* Links */}
                            <ul className="list-styled mb-7 font-size-sm">
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-payment.html">Payment</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" href="./auth.html">Auth</a>
                              </li>
                            </ul>
                            {/* Heading */}
                            <div className="mb-5 font-weight-bold">Modals</div>
                            {/* Links */}
                            <ul className="list-styled font-size-sm">
                              <li className="list-styled-item">
                                <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                  Newsletter: Horizontal
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                  Newsletter: Vertical
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                  Product
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                  Search
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                  Shopping Cart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                  Size Chart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                  Wait List
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  {/* Toggle */}
                  <a className="nav-link" data-toggle="dropdown" href="#">Pages</a>
                  {/* Menu */}
                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./about.html">About</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./faq.html">FAQ</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./404.html">404</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  {/* Toggle */}
                  <a className="nav-link" data-toggle="dropdown" href="#">Blog</a>
                  {/* Menu */}
                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./blog.html">Blog</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="docs/getting-started.html">Docs</a>
                </li>
              </ul>
              {/* Nav */}
              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a className="nav-link" data-toggle="modal" href="#modalSearch">
                    <i className="fe fe-search" />
                  </a>
                </li>
                <li className="nav-item ml-lg-n4">
                  <Link className="nav-link" to={ACCOUNT_PATH}>
                    <i className="fe fe-user" />
                  </Link>
                </li>
                <li className="nav-item ml-lg-n4">
                  <a className="nav-link" href="./account-wishlist.html">
                    <i className="fe fe-heart" />
                  </a>
                </li>
                <li className="nav-item ml-lg-n4">
                  <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                    <span data-cart-items={2}>
                      <i className="fe fe-shopping-cart" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
    )
}
