import React, { Component } from 'react'

class MenuItem extends Component {
    render() {
        return (
            <div className="menu-item" id="menu">
                <img src={this.props.image} alt="img" />
                <div className="menu-description">

                    
                    <div className="menu-item-name">{this.props.name}</div>
                        <div>{this.props.price}</div>
                        <div>{this.props.description}</div>
                        
                    
                </div>


            </div>
        )
    }
}

export default MenuItem;