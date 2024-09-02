
import React from 'react'
import { Link } from 'react-router-dom'


const links = [
    { id: 1, label: "GitHub", src: "/GitHub-Logo.svg", href: "https://github.com/TeutonicTed"},
    { id: 2, label: "LinkedIn", src:"/LinkedIn-Logo.svg", href: "https://linkedin.com/in/nashpeterson/"},
    { id: 3, label: "Stack Overflow", src: "/Stack_Overflow-Logo.svg", href: "https://stackoverflow.com/users/25596243/nash-peterson"}
]

export default function Footer(){

    return (
        <footer className="footer">
            <div className="icon-container">
                {links.map(item => (
                    <div key={item.id} className="icon">
                        <Link to={item.href}>
                            <img src={item.src} className="logo" alt={item.label} />
                        </Link>
                    </div>
                ))}
            </div>
        </footer>
    );
};