import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import '../CSS/NaviBar.css'

const NaviBar = () => {
    const [drop, setDrop] = useState(false)

    const dropDown = (event) => { //When called, changes state of drop to opposite of current boolean
        event.preventDefault()
        setDrop(!drop)
    }
        

    return(
        <>
            <nav>  
                <a href="/" className="logo">Logo</a>
                <div className="btn-container">
                    <a className="drop-btn" onClick={dropDown}><TiThMenu className="drop-hamburger"/></a>
                </div>
            </nav>
            <div className={!drop ? 'dropdown-menu hidden' : 'dropdown-menu active'}> {/* If drop not true: hidden, otherwise active*/}
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
