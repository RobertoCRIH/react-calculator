import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button/Button";

const MathOperations= ({ onClickOperation, onClickEqual })=>{

    return(
        <section className="math-operations">
            <Button text="+" clickHandlers={onClickOperation} />
            <Button text="-" clickHandlers={onClickOperation} />
            <Button text="*" clickHandlers={onClickOperation} />
            <Button text="/" clickHandlers={onClickOperation} />
            <Button text="=" clickHandlers={onClickEqual} />
        </section>
    )
    
}

MathOperations.propTypes={
    onClickOperation: PropTypes.func.isRequired, 
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations;