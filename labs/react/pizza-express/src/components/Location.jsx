import React, { Component } from 'react'

class Location extends Component {
    render() {
        return (
            <div className="location" >
                <h1>{this.props.name}</h1>
                <p>{this.props.address}</p>
                <p>{this.props.phone}</p>
            </div>
        )
    }
}

export default Location;