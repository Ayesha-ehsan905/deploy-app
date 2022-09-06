import {createStitches } from "@stitches/react";

//point:
// in create theme cannot assign stylee directly like border :2px solid blue.
// either from var or assign value by colors:{values}
// try to have a different Name then the actual CSS in JS that can use over TAGs

const defaultColors = {
   // generic colors
   white: "#ffffff",
   black: "#000000",
   borders: " 2px solid rebeccapurple",
  text: "$purple",
  bgColor: "white",

};


const createTheme = createStitches({
   theme: {
      // colors: {
      //   blue: 'royalblue',
      //   white:'white',
      // },
      colors:defaultColors,
      
      fontSizes:{
         medium:'14px',
         large:'20px',
      },
      
      
   },
   utils: {
      mt: (value) => ({
         marginTop: value,
       }),
      
       br: (value) => ({
         borderRadius: value,
       }),
   },
});
export const styled = createTheme.styled 