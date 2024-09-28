import React from "react";

function ChangeState(props) {
  console.log("ChangeState display");
  return (
    <>
      <button onClick={props.click}>{props.caption}</button>
    </>
  );
}

//export default ChangeState
export default React.memo(ChangeState);
