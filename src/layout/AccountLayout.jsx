import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  ACCOUNT_PATH, AUTH_PATH } from "../constants/path"
import InputText from "../components/InputText"
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    useParams,
    Link,
    Outlet,
  } from 'react-router-dom'
import { logoutAction } from '../stores/userReducer'

export default function AccountLayout() {

    const { user } = useSelector(store => store.UserRe  )
    const {form } = useState(user)
    console.log(`form`, form)
    const [error, setError] = useState("")


    const dispatch = useDispatch()
    const onLogout = (ev) =>{
      console.log(`adnaodig`)
      // ev.preventDefault();
      dispatch(logoutAction())
    }
    if(!user) return <Navigate to={AUTH_PATH}/>
    return (
        <div>
        <nav className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Breadcrumb */}
                <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                  <li className="breadcrumb-item">
                    <a className="text-gray-400" href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    My Account
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
        {/* CONTENT */}
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
                    <Link className="list-group-item list-group-item-action dropright-toggle " to={'/profile'}>
                      Widhlist
                    </Link>
                    <a className="list-group-item list-group-item-action dropright-toggle active" href="account-personal-info.html">
                      Personal Info
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                      Addresses
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                      Payment Methods
                    </a>
                    <a onClick={onLogout} className="list-group-item list-group-item-action dropright-toggle" href="#!">
                      Logout
                    </a>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                {/* Form */}
                <form >
                  <div className="row">
                    
                    <div className="col-12 col-md-6">
                      {/* Email */}
                      <InputText
                        label="Full Name*"
                        placeholder="Full Name*"
                        error={error.name}
                        onChange={ev => form.name = ev.target.value}
                        defaultValue={form?.name}
                        
                      />
                    </div>
                    <div className="col-12">
                      {/* Email */}
                     <InputText
                     label="Email Address"
                     placeholder="Email Address"
                     defaultValue={form?.username}
                      disabled
                     
                     />
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                      <InputText
                     label="Current Password"
                     placeholder="Current Password"
                     type="password"
                     onChange={ev => form.oldPassword = ev.target.value}
                     error={error.oldPassword}
                     />
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                      <InputText
                     label="New Password *"
                     placeholder="New Password *"
                     type="password"
                     onChange={ev => form.newPassword = ev.target.value}
                     error={error.newPassword}
                     />
                    </div>
                    <div className="col-12 col-lg-6">
                      {/* Birthday */}
                      <div className="form-group">
                        {/* Label */}
                        <label>Date of Birth</label>
                        {/* Inputs */}
                        <div className="form-row">
                          <div className="col-auto">
                            {/* Date */}
                            <label className="sr-only" htmlFor="accountDate">
                              Date
                            </label>
                            <select className="custom-select custom-select-sm" id="accountDate">
                              <option>10</option>
                              <option>11</option>
                              <option selected>12</option>
                            </select>
                          </div>
                          <div className="col">
                            {/* Date */}
                            <label className="sr-only" htmlFor="accountMonth">
                              Month
                            </label>
                            <select className="custom-select custom-select-sm" id="accountMonth">
                              <option>January</option>
                              <option selected>February</option>
                              <option>March</option>
                            </select>
                          </div>
                          <div className="col-auto">
                            {/* Date */}
                            <label className="sr-only" htmlFor="accountYear">
                              Year
                            </label>
                            <select className="custom-select custom-select-sm" id="accountYear">
                              <option>1990</option>
                              <option selected>1991</option>
                              <option>1992</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      {/* Gender */}
                      <div className="form-group mb-8">
                        <label>Gender</label>
                        <div className="btn-group-toggle" data-toggle="buttons">
                          <label className="btn btn-sm btn-outline-border active">
                            <input type="radio" name="gender" defaultChecked /> Male
                          </label>
                          <label className="btn btn-sm btn-outline-border">
                            <input type="radio" name="gender" /> Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      {/* Button */}
                      <button className="btn btn-dark" type="submit">Save Changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>    
      
    )
}
