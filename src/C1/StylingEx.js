import React from "react";
import "../App.css";


const InlineStyle= ()=>{

return(

    <h2 style={{background:"green"}}>inline style</h2>

);

};



const ExternalStyle= ()=>{

    return(
        <h2 className="cB">externalStyle</h2>
    
    );
    
    };


    export {InlineStyle,ExternalStyle}