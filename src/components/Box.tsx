import React from 'react';
import { styled } from '../theming/darkTheme';

export const Box = styled('div',{
    variants:{
        bg:{
           dark:{
            backgroundColor: "$bg_dark_div",
        },
        light:{
               backgroundColor: "$bg_light_div",

           }
        }
    }
});

