import React from 'react'
import './navbar.scss'
import {Person, Mail} from "@material-ui/icons"
export default function Navbar({menuOpen, setMenuOpen}) {
        // console.log(menuOpen)
    return (
        <div className={'navbar ' + (menuOpen && 'active')}>
            {/* if menuOpen is true, add active*/}
            <div className='wrapper'>
                <div className='left'>
                    <a href="#home" className='logo'>Sam.</a>
                    <div className='itemContainer'>
                        <Person className='icon'></Person>
                        <span>+11 111 11 11</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'></Mail>
                        <span>sam135642@gmail.com</span>
                    </div>
                </div>
            <div className='right'>
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
           
        </div>
    )
}
