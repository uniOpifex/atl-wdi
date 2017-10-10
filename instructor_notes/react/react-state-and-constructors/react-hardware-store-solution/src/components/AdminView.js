<<<<<<< HEAD
import React, {Component} from 'react'

import ProductList from './ProductList'
import ProductForm from './ProductForm'

class AdminView extends Component {
  render () {
    const productList = this.props.productList

    return (
      <div className="large-view-box">
        <h1>Admin</h1>

        <h2>Products</h2>
        <ProductList
          productList={productList}
          viewMode={'ADMIN'}
          deleteProductFromListByIndex={this.props.deleteProductFromListByIndex}
          showAdminOptions={true}/>

        <h2>Create a New Product</h2>
        <ProductForm
          addNewProductToProductList={this.props.addNewProductToProductList}/>

=======
import React, { Component } from 'react'
import Product from './Product'
import AdminForm from './AdminForm'

class AdminView extends Component {
  render () {
    return (
      <div>
        <h1>Admin View</h1>
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
                <button onClick={() => this.props.deleteProductFromProductList(index)}>Delete</button>
              </div>

            )
          }) }
        </div>
        <h2>Create A New Product</h2>
        <AdminForm addProductToProductList={this.props.addProductToProductList} />
>>>>>>> 4ac8fd7b8897cd53863bed862283ff1ad51011d6
      </div>
    )
  }
}

export default AdminView
