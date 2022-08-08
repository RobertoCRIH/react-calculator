import React from "react";
import PropTypes from 'prop-types';
import "./Button.css";

const Button= ({ type, text, clickHandlers })=>{
    return(
        <button className={type} onClick={()=>{
            clickHandlers(text);
        }}>
            <span>
                {text}
            </span>
        </button>
    )
}

Button.propTypes={
    type: PropTypes.string, 
    text: PropTypes.string.isRequired, 
    clickHandlers: PropTypes.func.isRequired
}



export default Button;