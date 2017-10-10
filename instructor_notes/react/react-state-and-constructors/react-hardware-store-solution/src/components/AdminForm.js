import React, { Component } from 'react'

class AdminForm extends Component {
  constructor () {
    super()

    this.state = {
      // Saves the Users input
      newForm: {
        productName: '',
        price: '',
        description: ''
      }
    }
  }

  handleChange = (event) => {
    // Cloning a new object
    // Using the spread operator
    const newForm = {...this.state.newForm}

    // Using braces syntax to select object key
    // given user inputs on the input with name price
    // newForm['price'] = 5.00
    newForm[event.target.name] = event.target.value

    // Take cloned object and apply it to the existing state
    this.setState({newForm: newForm})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addProductToProductList(this.state.newForm)

    const emptyForm = {
      productName: '',
      price: '',
      description: ''
    }
    this.setState({newForm: emptyForm})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          {/* value is equal to what we want to change in state */}
          {/* name is equal to the key we want to edit in the object  */}
          {/* onChange is the event listener that updates state with a users input */}
          <input onChange={this.handleChange} name="productName" type="text" placeholder="Name" value={this.state.newForm.productName}/>
        </div>
        <div>
          <input onChange={this.handleChange} name="price" type="text" placeholder="Price" value={this.state.newForm.price}/>
        </div>
        <div>
          <input onChange={this.handleChange} name="description" type="text" placeholder="Description" value={this.state.newForm.description}/>
        </div>
        <div>
          <button>Create A Product</button>
        </div>
      </form>
    )
  }
}

export default AdminForm
