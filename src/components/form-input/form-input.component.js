import React from "react";
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            //passing shrink property whenever user types in anything
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>) : null}
    </div>
);

export default FormInput;