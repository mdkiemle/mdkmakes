import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props) => (
    <li className={classes.navItem}>
        {/* <a href="#" className={props.active ? classes.active : null}>{props.children}</a> */}
        <p>{props.children}</p>
    </li>
)

export default navItem;