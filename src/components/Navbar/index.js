import React from 'react';
import {Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav id='navbar'>
                <NavMenu>
                    <NavLink to="/index" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/blogs' activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
};
export default Navbar;