import React from 'react'
import '../CSS/naviBar.css'



const NaviBar = () => {
    return(
        <nav>
            <a href="/">Logo</a>
            <div className="dropdown">
                <button className="dropBut" />
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