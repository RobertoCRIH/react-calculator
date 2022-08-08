//importacion
import React, { useState } from "react";
import words from "lodash.words";

// import Button from "./components/Button/Button";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

import './App.css';
// import { number } from "prop-types";

//generacion del componente

const App = ()=>{
    // const clickHandlerFunction= (text)=>{
    //     console.log(text);
    // }

    const [ stack, setStack ]= useState("");
    const items= words( stack, /[^-^+^*^/]+/g )
    
    //Lo que ejecuta la función
    console.log("Calculadora renderizada!!", items);
    return(
        <div className="react-calculator">
            
            <Result value={ items[ items.length - 1 ] }/>

            <Numbers onClickNumber={number=>{
                console.log(number);
                setStack(`${stack}${number}`);
            }}/>

            <Functions 
                onContentClear={clear=>{
                    console.log("Content Clear!!")
                    setStack("")

                }
               }

                onDelete={deleteContent=>{
                    if( stack.length > 0 ){
                        console.log("Content Deleted")
                        const newStack= stack.substring( 0, stack.length - 1 )
                        setStack(newStack)
                    } 
                    
                }}
            />

            <MathOperations 
            onClickOperation={operation =>{
                console.log("Operación: " + operation)
                setStack(`${stack}${operation}`)
            }
                }
            onClickEqual={equal =>{
                 console.log("Igual: " + equal)
                setStack((eval(stack)).toString())
                }}
            />
        </div>
    );
};

//exportación

export default App;