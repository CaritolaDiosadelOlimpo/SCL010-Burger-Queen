import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Projects({ match }) {
    return(
        <Router>

    <ul>
        <li>
            <Link to={`${match.url}/a-project`}> A project</Link>
            </li>
        <li>
            <Link to= {`${match.url}/another-project`}>Another project</Link> 
        </li>
        <li>
            <Link to= {`${match.url}/other-component`}>Other component</Link> 
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