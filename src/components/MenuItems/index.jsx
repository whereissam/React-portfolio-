import React from 'react'
import './menuItems.scss'
export default function MenuItems(props,{ hovered}) {

    let closeMenu = () => {
        props.setMenuOpen(false)
    }

    return (
        <li onClick={closeMenu} className={hovered ? 'menuItems hovered' : "menuItems"}>
          <a href={'#' +props.title}>
            {props.title}
          </a>
        </li>   
    )
}

