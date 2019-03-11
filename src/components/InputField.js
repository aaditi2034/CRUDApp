import React from 'react';

const Input = function(props) {
    return (
        <div className=''>
            <label className='form-label'>{props.title}</label>
            <input
                className='form-control'
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;