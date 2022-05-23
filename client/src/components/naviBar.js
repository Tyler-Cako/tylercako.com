import React from 'react'
import '../CSS/NaviBar.css'



const NaviBar = () => {
    const dropdownMenu = document.querySelector('dropdown-menu')

    console.log(dropdownMenu)

    const openMenu = (e) => {
        dropdownMenu.classList.add('active')
    }

    return(
        <nav>
            <a href="/" className="logo">Logo</a>
            <button className="drop-btn" onClick={openMenu}/>
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