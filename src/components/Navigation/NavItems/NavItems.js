import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul className={classes.navItems}>
        <NavItem active>Main</NavItem>
        <NavItem>Projects</NavItem>
    </ul>
)

export default navItems;