import { useState } from 'react'
import { Link } from 'react-router-dom'
/*
    1. What is typed into the form field is captured in state
    2. When the submit button is clicked, we grab that value, and set to be the logged in user


*/

export default function Header(props){

    const [ formField, setFormField ] = useState("")

    const menu = [
        { id: 1, label: "About Me", href: "/about"},
        { id: 2, label: "Portfolio", href: "/portfolio"},
        { id: 3, label: "Resume", href: "/resume"},
        { id: 4, label: "Contact", href: "/contact"}
    ]

    return (
        <header className="header">
            <div className="row">
                <div className="col-4">
                    <h1>{props.sitename}</h1>
                </div>

                <div className="col-8">
                    <ul className="nav">
                        { menu.map( item => (
                        <li key={item.id} className="nav-item">
                          <Link className="nav-link" to={item.href}>{item.label}</Link>
                            </li>  
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}