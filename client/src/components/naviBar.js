import React from 'react'
import '../CSS/NaviBar.css'



const NaviBar = () => {
    
    return(
        <nav>
            <a href="/" className="logo">Logo</a>
            <button className="drop-btn" />
            <div className="dropdown-menu">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a className="drop-exit">X</a>
            </div>
        </nav>
    )
}

export default NaviBar