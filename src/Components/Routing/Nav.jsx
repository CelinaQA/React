'use strict';

import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
    return (
        <>
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/" >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about" >About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/shop" >Shop</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navigation;