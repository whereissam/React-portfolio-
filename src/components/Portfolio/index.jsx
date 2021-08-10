import React, {useState} from 'react'
import './portfolio.scss'
import PortfolioList from '../PortfolioList'

export default function Portfolio() {
    const [selected, setSelected] = useState("")
    const list = [
        {
            id: 'featured',
            title: "Featured"
        },
        {
            id: 'web',
            title: "Web App"
        },
        {
            id: 'designing',
            title: "Designing"
        },
        {
            id: 'branding',
            title: "Branding"
        }
    ]

    // console.log(selected)
    
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>           
               {
                   list.map((item)=>(
                       <PortfolioList 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected} 
                            id={item.id}
                            key={item.id}
                        />
                ))}
            </ul> 
            <div className="container">
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <h3>Banking App</h3>
                </div> 
            </div>      
        </div>
    )
}
