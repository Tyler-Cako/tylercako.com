import React from 'react'
import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
    return(
        <Navbar fixed="top" >
            <Container>
                <Navbar.brand href="/"></Navbar.brand>
            </Container>
        </Navbar>
    )
}

export default NavBar