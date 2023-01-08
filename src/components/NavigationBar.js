import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => (
    <Navbar expand="lg">
        <Navbar.Brand href="#home" className="smoothscroll">Sbai Salah DEV</Navbar.Brand>
        <Navbar.Toggle area-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item className="nav"><Nav.Link className="smoothscroll" href="#about">About</Nav.Link></Nav.Item>
                <Nav.Item className="nav"><Nav.Link className="smoothscroll" href="#work">Portfolio</Nav.Link></Nav.Item>
                <Nav.Item className="nav"><Nav.Link className="smoothscroll" href="#contact">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)