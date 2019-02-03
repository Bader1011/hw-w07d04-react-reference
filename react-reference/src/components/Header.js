import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
    render() {
        return (


            <div className="header" >
                <img src={logo} className="App-logo" alt="logo" />
                <h2 > React is awesome </h2>
            </ div>
        )
    }
}


    export default Header;