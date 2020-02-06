import React from 'react';
import classes from './Project.module.css';


const project = (props) => {
    let style = [classes.Project]
    if (props.show) {
        style.push(classes.Hide);
    }
    return (
       
        <div className={classes.Flex}>
            <div className={style.join(' ')}>
                <div onClick={() => props.clicked(props.projectName)} className={classes.ProjectWrap}>
                    {props.projectName}
                </div>
            </div>
        </div>
    )
}

export default project;