import React from "react";
import "./navbar.css"
import { Navbar, Container, Nav, NavDropdown, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg"

export default function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img className="logo" src={Logo} alt="logo"></img>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/registro-pf">Sobre</Nav.Link>
                        <NavDropdown title="Cadastre-se" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/registro-pf">Sou cidadão</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/registro-pj">Sou empresa</NavDropdown.Item>
                        </NavDropdown>
                        <DropdownButton id="dropdown-basic-button" title="Login">
                            <Dropdown.Item href="#/action-1">Cidadão</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Empresa parceira</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}