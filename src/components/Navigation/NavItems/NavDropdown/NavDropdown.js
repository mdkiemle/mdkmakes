import React, {Component} from 'react';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import classes from './NavDropdown.module.css';

const navDropdown = (props) =>  {

        return (
            <Aux>
                <li className={classes.NavDropdownContainer}>
                    <p className={classes.NavDropdown}>{props.name} <span className={classes.arrowRight} /></p>
                    <div className={classes.dropdownContent}>{props.children}</div>
                </li>
                
            </Aux>
        )
    }

export default navDropdown; 