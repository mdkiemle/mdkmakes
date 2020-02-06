import React, {Component} from 'react';
import projectInfo from './projectInfo/projectInfo';
import Project from '../../components/Project/Project';
import ProjCard from '../../components/ProjCard/ProjCard';
import classes from './Projects.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Projects extends Component {

   state = {
       showing: null
   }
    clickProjectHandler = (name) => {
        this.setState({showing: name});
        console.log(this.state);
        // console.log(this.state.showCard);
    }

    setProjCard = (showing) => {
        if(showing) {
            return Object.keys(projectInfo).map(projects => {
                return [...Array(projectInfo[projects])].map(project => {
                    if (project.projectName === showing) {
                        return <ProjCard key={showing + '-card'} {...project} show />
                    }
                })

            })
        }
    }
    setProjects = (showing) => {
        
            return Object.keys(projectInfo).map(projects => {
                // console.log(projects);
            return [...Array(projectInfo[projects])].map(project => {
                if (showing !== null && project.projectName === showing) {
                    console.log('inside the thing');
                    return <Project clicked={this.clickProjectHandler} key={project.projectName} projectName={project.projectName} show={true}/>
                } else {
                    return (
                        <Project clicked={this.clickProjectHandler} key={project.projectName} projectName={project.projectName}/>
                    )
                }
            })
         })
        }
    
    render() {
        let projects = null;
        let projCard = null;
        if(this.state.showing) {
            projects = this.setProjects(this.state.showing); 
            projCard = this.setProjCard(this.state.showing);
            console.log(projCard);
           // console.log(projects);
        } else {
            projects = this.setProjects(); 
        }


        
        return(
            <Aux>
                <div className={classes.Projects}>
                   
                        <h2>Projects</h2> 
                        <div className={classes.Flex}>
                        <div className={classes.Arrows}>
                        {projects}
                        </div>
                         <div className={classes.Flex}>
                        {projCard}
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Projects;