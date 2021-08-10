import React from 'react'
import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, id}) {

    // console.log(setSelected)
    return (
        <li 
            className={active ? 'portfolioList active' : "portfolioList"} 
            onMouseEnter={()=>setSelected(id)} 
            onMouseLeave={()=>setSelected('')}
        >
            {title}
        </li>
    )
}
