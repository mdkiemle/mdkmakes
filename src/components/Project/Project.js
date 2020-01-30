import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import ProjCard  from './ProjCard/ProjCard';
import classes from './Project.module.css';
const project = (props) => {

    return (
        <div className={classes.Project}>
            <div className={classes.ProjectWrap}>
                {props.projectName} 
            </div>
                <ProjCard description={props.description} status={props.status} uses={props.utilizes}/>
        </div>
    )
}

export default project;