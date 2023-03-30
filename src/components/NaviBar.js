import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-scroll'
import '../CSS/NaviBar.css'

const NaviBar = () => {
    const [drop, setDrop] = useState(false)

    const dropDown = (event) => { //When called, changes state of drop to opposite of current boolean
        event.preventDefault()
        setDrop(!drop)
    }
        

    return(
        <>
            <a className="drop-btn" onClick={dropDown}><TiThMenu className="drop-hamburger"/></a>
            <div className={!drop ? 'dropdown-menu hidden' : 'dropdown-menu active'}> {/* If drop not true: hidden, otherwise active*/}
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} offset={-50} duration={500}>About</Link>
                <Link to="projects" smooth={true} offset={-100} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link>
                <a target="_blank" href="https://drive.google.com/file/d/1whjSnhAt_NslghLJOtNfSAb8-co0_1TJ/view?usp=sharing">Resume</a>
                <a target="_blank" href="https://github.com/Tyler-Cako">Github</a>

                <a className="drop-exit" onClick={dropDown} href="/">X</a>
            </div>
        </>
    )
}

export default NaviBar
