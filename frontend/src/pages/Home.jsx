import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductLists from '../features/product-list/component/ProductLists'
const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductLists/>
      </Navbar>
    </div>
  )
}

export default Home
