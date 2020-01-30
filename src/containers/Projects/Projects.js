import React, {Component} from 'react';
import projectInfo from './projectInfo/projectInfo';
import Project from '../../components/Project/Project';
import classes from './Projects.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Projects extends Component {

    


    render() {
        const projects = Object.keys(projectInfo).map(projects => {
            console.log(projects);
           return [...Array(projectInfo[projects])].map(project => {
               return <Project key={project.projectName} {...project}/>
           })
        })
        
        return(
            <Aux>
                <div className={classes.Projects}>
                    <h2>Projects</h2> 
                    {projects}
                </div>
            </Aux>
        )
    }
}

export default Projects;