import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" fixed-top>
      <NavbarBrand href="/">Tienda Deportiva</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/products">Productos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">Nosotros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contacto</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Más
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem href="/blog">Blog</DropdownItem>
              <DropdownItem href="/services">Servicios</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/help">Ayuda</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

