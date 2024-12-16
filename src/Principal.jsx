import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Home from './pages/Home';
import Products from './pages/Products';
import Sucursales from './pages/Sucursales';
import Footer from './components/Footer';
import './Estilos.css';  
import Nosotros from './pages/Nosotros';
import Promociones from './pages/Promociones';
import Contacto from './pages/Contacto'


function Principal() {
  return (
    <Router>
      <Navbar color="green" dark expand="md">
        <Container>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/products">Productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/nosotros">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/sucursales">Sucursales</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contacto">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/promociones">Promociones</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/promociones" element={<Promociones />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default Principal;

