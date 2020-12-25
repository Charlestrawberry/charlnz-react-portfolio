import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .navbar {
       background-color: #222;
   }

   .navbar-brand, .navbar-nav .nav-link{
       color: #bbb;

       &:hover {
           color: #777;
       }
    .NavDropdown{
        
    }
   }
`;

export const NavigationBar = () =>(
    <Styles>
        <Navbar expand= "lg">
        <Navbar.Brand href= "/">Charlnz Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nabvabr-nav" />
        <Navbar.Collapse id= "basic-nabvabr-nav">
            <Nav className="ml-auto">
                <Nav.Item> <Nav.Link href= "/">Home</Nav.Link></Nav.Item>
                <Nav.Item> <Nav.Link href= "/about">About</Nav.Link></Nav.Item>
                <Nav.Item> <Nav.Link href= "/gallery">Gallery</Nav.Link></Nav.Item>
                <Nav.Item> <Nav.Link href= "/Contact">Contact</Nav.Link></Nav.Item>
                <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="./Services">Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <Nav.Item> <Nav.Link href= "/testimonials">Testimonials</Nav.Link></Nav.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)