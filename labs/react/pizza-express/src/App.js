import React, { Component } from 'react';

import Navbar from './components/Navbar.jsx'
import SplashImage from './components/SplashImage.jsx'
import Description from './components/Description.jsx'
import MenuList from './components/MenuList.jsx'
import LocationList from './components/LocationList.jsx'
import Contact from './components/Contact.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar/>
        < SplashImage/>
        < Description/>
        <MenuList/>
        <LocationList/>
        <Contact/>
        <h1>Place your components in here!</h1>
      </div>
    );
  }
}

export default App;



