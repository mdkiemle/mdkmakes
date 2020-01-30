import React from 'react';
import classes from './ProjCard.module.css';

const projCard = (props) => (
    <div className={classes.ProjCard}>
        {props.description}
        {props.uses}
        {props.status}
    </div>
)

export default projCard;