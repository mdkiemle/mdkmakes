import React from 'react';
import classes from './MainHUD.module.css';
import NavItems from '../../NavItems/NavItems';

const mainHUD = (props) => {

    let attachedClasses = [classes.MainHUD, classes.hide];
    if (props.show) {
        attachedClasses = [classes.MainHUD, classes.show];
        console.log(attachedClasses);
    }
    return (
    <div className={attachedClasses.join(' ')}>
        <h1>Links</h1>
        <NavItems/>
    </div>
    )
}

export default mainHUD;