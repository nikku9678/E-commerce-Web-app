import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetails from '../features/product-list/component/ProductDetails'
const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
    </div>
  )
}

export default ProductDetailPage
