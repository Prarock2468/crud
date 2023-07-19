import React from 'react'

const User = (props) => {
  return (
    <div>
         
            
            <ul>
                <li><p>{props.name}</p></li>
                <li><p>{props.Email}</p></li>
                <li><p>{props.city}</p></li>
                <li><p>{props.description}</p></li>
            </ul>
            <hr/>
    </div>
  )
}

export default User