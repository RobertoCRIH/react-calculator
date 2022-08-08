import React from "react";
import Button from "./Button/Button";
import PropTypes, { number } from "prop-types";

const numbersArray=[7,8,9,4,5,6,1,2,3,0] 

const renderBtns= onClickNumber =>{

    const renderButton = number => (
        <Button 
        key={number.toString()} 
        text={number.toString()} 
        clickHandlers={onClickNumber} 
        />
    )

    return(
 
        numbersArray.map(renderButton)
    )
}

const Numbers = ({ onClickNumber })=>{

    return(
        <section className="numbers">
            {
                renderBtns(onClickNumber)
            }
        </section>
    )
    
}

Numbers.propTypes={
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;