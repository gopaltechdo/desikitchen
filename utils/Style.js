import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#ffffff',
    '& a':{
        color: '#000000',
        marginLeft: 10,
    },
  },
  main:{
    minHeight: '80vh',
  },
  footer:{
    textAlign: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
}));
export default useStyles;