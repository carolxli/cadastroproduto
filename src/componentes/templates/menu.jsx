import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import TelaCadProd from '../telas/telaCadProd';
import TelaLancaDesp from '../telas/telaLancaDesp';
import TelaMenu from '../telas/telaMenu';

export default function Menu(props) {
    const [mostrarTelaCadProd, setMostrarTelaCadProd] = useState(false);
    const [mostrarTelaLancaDesp, setMostrarTelaLancaDesp] = useState(false);
    const [mostrarMenu,setMostrarMenu] = useState(true);

    const abrirMenu = () => {
        setMostrarMenu(true);
        setMostrarTelaLancaDesp(false);
        setMostrarTelaCadProd(false);
    };

    const abrirTelaCadProd = () => {
        setMostrarTelaCadProd(true);
        setMostrarTelaLancaDesp(false);
        setMostrarMenu(false);
    };

    const abrirTelaLancaDespesa = () => {
        setMostrarTelaLancaDesp(true);
        setMostrarTelaCadProd(false);
        setMostrarMenu(false);
    };

    return (
        <>
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand onClick={abrirMenu}>Menu</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Estoque" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={abrirTelaCadProd}>Cadastrar Produtos</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Visualizar Estoque</NavDropdown.Item>
                                </NavDropdown>
                       
                                <NavDropdown title="Despesas" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={abrirTelaLancaDespesa}>Lançar Despesas</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Quitar Despesas</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {mostrarTelaCadProd && <TelaCadProd />}
                {mostrarTelaLancaDesp && <TelaLancaDesp />}
                {mostrarMenu && <TelaMenu/>}
            </div>
        </>
    );
}
