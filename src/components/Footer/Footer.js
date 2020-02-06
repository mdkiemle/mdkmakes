import React from 'react';
import classes from './Footer.module.css';

//We theoretically could do a lot more with a footer but I don't need much with mine, so it just spits out a link essentially
const footer = (props) => (
    <footer className={classes.Footer}>
        <div>Just some text so we can see where this is</div>
    </footer>
)

export default footer;