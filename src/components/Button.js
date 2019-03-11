import React from 'react';

const Button = function(props) {
    return (
        <button 
            style= {props.style} 
            className = 'btn'
            onClick= {props.action} 
        >{props.title}</button>
    )
}

export default Button;