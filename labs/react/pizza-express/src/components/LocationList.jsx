import React, { Component } from 'react'
import Location from './Location.jsx'
import locationData from '../locationData.js'

class LocationList extends Component {
    render() {
        const locationComponents = locationData.map(item => {
            return <Location name={item.name} address={item.address} phone={item.phone} />
        })

        return (
            <div id="locations" >
                <h1>Locations :</h1>
                <div className="locations">
                    {locationComponents}
                </div>


            </div>

        )
    }
}

export default LocationList