import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  
export default function FormPost() {
  return (
   
    <Paper 
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <AccountCircleIcon fontSize="large"/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Publique algo"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
     
      <Divider sx={{ height: 28, m: 1, color: 'black' }} orientation="vertical" />
      <IconButton color="info" sx={{ p: '10px' }} aria-label="directions">
        <SendIcon />
      </IconButton>
         
    </Paper >
   
   
  );
}