import React from "react";
import { Typography } from "@mui/material";

const StackLeft = ({ children }) => {
    return (
        <Typography color="#70808D" fontWeight="bold" fontSize={12}>
            {children}
        </Typography>
    );
};

export default StackLeft;