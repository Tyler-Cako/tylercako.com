import React, {useState} from 'react'
import '../CSS/NaviBar.css'



const NaviBar = () => {
    const [drop, setDrop] = useState(false)

    const dropDown = (event) => {
        event.preventDefault()
        setDrop(!drop)
    }
        

    return(
        <>
            <nav>  
                <a href="/" className="logo">Logo</a>
                <button className="drop-btn" onClick={dropDown}/>
            </nav>
            <div className={!drop ? 'dropdown-menu hidden' : 'dropdown-menu active'}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact</a>
                    <a className="drop-exit" onClick={dropDown} href="/">X</a>
            </div>
        </>
    )
}

export default NaviBar
