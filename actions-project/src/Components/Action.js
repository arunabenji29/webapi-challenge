import React from 'react'

const Action = (props) => {

    return(
    <div className='projects'>
    <h3>{props.clickedProject.name}</h3>
    <h5>{props.clickedProject.description}</h5>
    <ul>
      {props.actions.map(action => (
         
        <div className='action'>
            
        <p>{action.description}</p>
        <p>{action.notes}</p>
        </div>
      ))}
      </ul>
      </div>
      );
}
export default Action