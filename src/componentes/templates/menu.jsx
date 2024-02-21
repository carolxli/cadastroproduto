import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import TelaCadProd from '../telas/telaCadProd';

export default function Menu(props) {
    const [mostrarTelaCadProd, setMostrarTelaCadProd] = useState(false);

    const abrirTelaCadProd = () => {
        setMostrarTelaCadProd(true);
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Estoque" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={abrirTelaCadProd}>Cadastrar Produtos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Visualizar Estoque</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {mostrarTelaCadProd && <TelaCadProd />}
        </div>
    );
}
