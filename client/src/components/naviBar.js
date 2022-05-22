import React from 'react'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import './naviBar.css'



const NaviBar = () => {
    return(
        <Navbar fixed="top" >
            <Container>
                <Navbar.Brand className="text-primary" href="/">Logo</Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle />
                    
                    <Dropdown.Menu align="start">
                        <Dropdown.Item href="/" className="text-secondary">Home</Dropdown.Item>
                        <Dropdown.Item href="/" className="text-secondary">About</Dropdown.Item>
                        <Dropdown.Item href="/" className="text-secondary">Projects</Dropdown.Item>
                        <Dropdown.Item href="/" className="text-secondary">Github</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Container>
        </Navbar>
    )
}

export default NaviBar