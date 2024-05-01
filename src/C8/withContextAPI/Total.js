import React from "react";
import { TotalContext } from "./store/TotalContext";

const Total = () => {
  return (
    <>
      <h1> Total component</h1>
      <TotalContext.Consumer>
        {(total) => {
          return <h1>Total : {total}</h1>;
        }}
      </TotalContext.Consumer>
    </>
  );
};

export { Total };
