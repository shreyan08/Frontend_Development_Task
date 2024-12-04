import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <footer className="Footer-section">
           <div className="container">
           <ul className="footer-links">
             <li>&copy; 2024</li>
              <li><NavLink to="#">Twitter</NavLink></li>
              <li><NavLink to="#">linkedin</NavLink></li>
              <li><NavLink to="3">Email</NavLink></li>
              <li><NavLink to="#">Rss Feed</NavLink></li>
              <li><NavLink to="#">Add to Feedly</NavLink></li>
            </ul>
           </div>
       </footer>
    </>
  )
}

export default Footer
