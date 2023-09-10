import React, { Component } from 'react'
import './Layout.css'
import Navbar from '../components/NavBar'

class Layout extends Component {
    render() {
        return (
            <div className="w-full h-screen flex flex-col md:flex-row">
                <Navbar />
            </div>
        )
    }
}
 export default Layout