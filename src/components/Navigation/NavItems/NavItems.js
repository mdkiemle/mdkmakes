import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import NavDropdown from './NavDropdown/NavDropdown';

const navItems = (props) => (
    <ul className={classes.navItems}>
        <NavItem>About Me</NavItem>
        <NavItem>Main</NavItem>
        <NavItem>Competitive Profile</NavItem>
        <NavItem>Projects</NavItem>
        <NavDropdown name={'Testing'}>
            <NavItem>double project</NavItem>
            <NavItem>double project</NavItem>
        </NavDropdown>
    </ul>
)

export default navItems;