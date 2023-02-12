import React from 'react';
import './input.css';

export const Input = props => {
    let inputElement = null;
    const inputClasses = ['inputElement'];

    if (props.inValid && props.shouldValidate && props.touched) {
        inputClasses.push('inValid')
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    }
    return (
        <div className='input'>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default Input;