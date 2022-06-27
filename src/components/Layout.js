import React from 'react';
import {Box,Typography} from '@mui/material'

    const Layout =({heading,children})=>{
        return(
            <Box 
                backgroundColor= 'white'
                borderRadius = {2}
                p={3}
            > <Typography  variant="h6"
            align="left"
            color="#70808D"
            fontSize={14}
            fontWeight="bold"
            textTransform="uppercase">
               
                   {heading}</Typography>
                   {children}
                    </Box>
        );      
    };
    export default Layout;
  
