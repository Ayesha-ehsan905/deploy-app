import React from "react";
import { Span } from "../Span";
import { Button } from "../Button";
const drawerToggleButton = (props) => {
  return (
    <>
      
      <Button style={"side_drawer"} onClick={props.drawerClickHandler} >
         <Span  tooglebtn_lines={'line'} />
         <Span tooglebtn_lines={'line'}/>
         <Span tooglebtn_lines={'line'}/>
      </Button>
    </>
  );
};

export default drawerToggleButton;
