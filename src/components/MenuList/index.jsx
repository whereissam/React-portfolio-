import React, {useState} from 'react'
import './menuList.scss'
import MenuItems from '../MenuItems'

export default function Menu({menuOpen, setMenuOpen}) {

    const [hovered] = useState('home')
    const menus = [
        {id: 'home', name: 'home'},
        {id: 'portfolio', name: 'portfolio'},
        {id: 'works', name: 'works'},
        {id: 'testimonials', name: 'testimonials'},
        {id: 'contact', name: 'contact'},
      ]
      
    //   console.log(hovered)

    return (
        <div className={'menu '+(menuOpen && "active")}>
            <ul>
                    {
                        menus.map((menu) => (
                            <MenuItems 
                                title={menu.name} 
                                hovered={hovered === menu.id} 
                                id={menu.id}
                                key={menu.id}
                                menuOpen={menuOpen} 
                                setMenuOpen={setMenuOpen}
                            />
                            ) 
                        )
                    }
            </ul>
        </div>
    )
}
