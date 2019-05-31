import React from 'react'

const Project = (props) => {
    return (
        <div>
            <div className='projects'>
                <h3 onClick={() => props.handleItem(props.project)}>{props.project.name}</h3>
                <p>{props.project.description}</p>
            </div>
        </div>
    )
}
export default Project