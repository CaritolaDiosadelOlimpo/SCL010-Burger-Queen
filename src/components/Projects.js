import React from 'react';
import '../App.css';
import { browserRouter as Router, Route, Link} from 'react-router-dom'

function Projects() {
    return(
        <Router>

    <ul>
        <li>
            <link to={`${match.url}/a-project`}> A project</link>
            </li>
        <li>
            <link to= {`${match.url}/another-project`}>Another project</link> 
        </li>
        <li>
            <link to= {`${match.url}/other-component`}>Other component</link> 
        </li>
    </ul>
    
    <Route
    exact path = {match.path}
    render= {() => <h3>Please select a project</h3> } />
    <Route path= {`${match.path}/:id`} component ={Project} />
    
   
    </Router>
    )
}

function Project({match}) {
    return(
        <div>
            <h3>{match.params.id} </h3>
        </div>
    )
}

export default Projects;