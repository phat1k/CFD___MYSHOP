import { useState } from 'react'
import { PRODUCT_PATH, PRODUCT_DETAIL_PATH, ACCOUNT_PATH, AUTH_PATH, PRODUCT_CATEGORY_PATH, PRODUCT_CATEGORY_PATHH } from "./constants/path"
import AccountLayout from "./layout/AccountLayout"
import Shop from "./pages/product"
import ProductDetail from "./pages/product/[slug]"
import Login from "./pages/login"
import { Provider } from "react-redux"
import { store } from "./stores"
import Wishlist from "./pages/profile/"
// import { GlobalStateProvider } from "./hook/useGlobalState"
// import Header from "./components/Header"
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Link,
  Outlet,
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import 'antd/dist/antd.css';
function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">

      <BrowserRouter>
  {/* <GlobalStateProvider> */}

          <Provider store={store}>
            <Routes >
              <Route element={<MainLayout />}>
                <Route path={PRODUCT_PATH} element={<Shop />} />
                <Route path={PRODUCT_CATEGORY_PATH} element={<Shop />} />
                <Route path={PRODUCT_DETAIL_PATH} element={<ProductDetail />} />
                <Route path={AUTH_PATH} element={<Login />} />
                <Route path="/profile" element={<Wishlist />} />
                <Route path={ACCOUNT_PATH} element={<AccountLayout />}>
                </Route>
              </Route>
            </Routes>
          </Provider>
  {/* </GlobalStateProvider> */}


      </BrowserRouter>
    </div>
    // <div className="App"> 
    //   <Shop/>
    // </div>
  )
}

export default App
