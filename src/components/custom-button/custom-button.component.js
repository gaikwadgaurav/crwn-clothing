import React from "react";
import './custom-button.styles.scss';

//Conditional rendering a className based of a prop i.e isGoogleSignIn using string interpolation
const CustomButton = ({children, isGoogleSignIn,inverted,...otherProps}) => (
    <button className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button`}
            {...otherProps}>
        {children}
    </button>
)
export default CustomButton
