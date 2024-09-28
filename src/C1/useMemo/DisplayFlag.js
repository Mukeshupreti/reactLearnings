import React from "react";

 function DisplayFlag({flag}){

    console.log("Flag display");
    return (
      <>
        <h1 style={{color: "black",background:"white"}}> Flag : {flag.toString()}</h1>
      </>
    );



}

//export default DisplayFlag
export default React.memo(DisplayFlag)