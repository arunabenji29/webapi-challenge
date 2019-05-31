import React from 'react'
import Project from './Project'

const Projects = (props) => {
    return (
        <div>
            <ul >
                {props.projects.map(project => (
                    <Project
                        project={project}
                        handleItem={props.handleItem}
                        key={project.id}
                    />

                ))}
            </ul>
        </div>
    )
}
export default Projects