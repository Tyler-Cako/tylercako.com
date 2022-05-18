import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NaviBar = () => {
    return(
        <Navbar fixed="top" >
            <Container>
                <Navbar.Brand className="text-primary" href="/">Logo</Navbar.Brand>
                <Nav.Link href="/" className="text-secondary">Home</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/">Projects</Nav.Link>
                <Nav.Link href="/">Github</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default NaviBar