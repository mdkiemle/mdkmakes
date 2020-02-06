import React, { Component } from 'react';
import classes from './HUDToggle.module.css';
import MainHUD from './MainHUD/MainHUD';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const HUDToggle = (props) => {

    
        let lineIcon = (
            <Aux>
                <div></div>
                <div></div>
                <div></div>
            </Aux>
        );
        if (props.show) {
        lineIcon = (
            <Aux> 
                <div className={classes.crossLeft}></div>
                <div className={classes.crossRight}></div>
            </Aux>
            )
        }

    return (
        <header>
            <div className={classes.HUDToggle} onClick={props.click}>
                {lineIcon}
            </div>
        </header>
        );
    }

export default HUDToggle;