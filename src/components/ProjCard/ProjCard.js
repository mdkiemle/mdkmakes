import React from 'react';
import classes from './ProjCard.module.css';

const projCard = (props) => (
    <div className={classes.ProjCard}>
        <h2>{props.projectName}</h2>
        <div>{props.description}</div>
        <div className={classes.Flex}>
            <div>
                <h3>Uses</h3>
                <div>{props.utilizes}</div>
            </div>
            <div>
                <h3>Status</h3>
                <div>{props.status}</div>
            </div>
        </div>
    </div>
)

export default projCard;