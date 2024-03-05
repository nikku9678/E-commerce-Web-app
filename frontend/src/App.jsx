import React from 'react'
import './App.css'
import  Counter  from './features/counter/Counter'
import Navbar from './features/navbar/Navbar'
import Home from './pages/Home'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Cart from './features/cart/Cart'
import CartPage from './pages/CartPage'
import Checkout from './Checkout'
import ProductDetails from './features/product-list/component/ProductDetails'
import ProductDetailPage from './pages/ProductDetailPage'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/prod-details",
    element: <ProductDetailPage/>,
  },
]);
const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
