import React from 'react';
import './App.css';
import { Typography, Box } from '@mui/material'
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Box display='flex' flexDirection='row'>
        <Box marginTop={9} marginBottom={-5} marginLeft={7}>
          <Typography variant='h4' align='left'>
            Request New System
          </Typography>
        </Box>
      </Box>
      <Page />
    </div>
  );
}

export default App;
