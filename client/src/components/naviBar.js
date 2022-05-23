import React from 'react'
import '../CSS/NaviBar.css'



const NaviBar = () => {
    
    return(
        <nav>
            <a href="/" className="logo">Logo</a>
            <div className="dropdown">
                <button className="drop-btn" />
                <div className="dropdown-menu">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Projects</a>
                </div>
            </div>
        </nav>
    )
}

export default NaviBar