import React from 'react'
import './navbar.scss'
import {Person, Mail} from "@material-ui/icons"
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>Logo.</a>
                    <div className='itemContainer'>
                        <Person className='icon'></Person>
                        <span>+11 111 11 11</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'></Mail>
                        <span>111@logo.com</span>
                    </div>
                </div>
            <div className='right'></div>
        </div>
           
        </div>
    )
}
