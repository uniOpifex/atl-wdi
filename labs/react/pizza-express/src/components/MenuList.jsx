import React, { Component } from 'react'
import MenuItem from './MenuItem.jsx'
import PizzaData from '../pizzaData.js'

class MenuList extends Component {
    render() {
        const pizzaComponents = PizzaData.map(menuItem => {
            return <MenuItem name={menuItem.name} price={menuItem.price} description={menuItem.description} image={menuItem.image} />
        })

        return (
            <div className="menu" >
                <h1>Menu</h1>
                <div className="menu-container">
                    {pizzaComponents}
                </div>
            </div>

        )
    }
}

export default MenuList;