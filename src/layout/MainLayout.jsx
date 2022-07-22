import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    useParams,
    Link,
    Outlet,
  } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
