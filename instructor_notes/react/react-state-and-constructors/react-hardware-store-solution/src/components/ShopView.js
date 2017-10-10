import React, { Component } from 'react'
<<<<<<< HEAD

import ProductList from './ProductList'
=======
import Product from './Product'
>>>>>>> 4ac8fd7b8897cd53863bed862283ff1ad51011d6

class ShopView extends Component {
  render () {
    return (
<<<<<<< HEAD
      <div className="large-view-box">
        <h1>Shop</h1>

        <ProductList
          productList={this.props.productList}
          viewMode={'SHOP'}
          addProductToCart={this.props.addProductToCart} />
=======
      <div>
        <h2>Products</h2>
        <div>
          { this.props.productList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button>Add To Cart</button>
              </div>
            )
          }) }
        </div>
>>>>>>> 4ac8fd7b8897cd53863bed862283ff1ad51011d6
      </div>
    )
  }
}

export default ShopView
