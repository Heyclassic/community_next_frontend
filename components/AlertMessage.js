import Alert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: '1rem',
      },
    },
  }),
);

export default function AlertMessage({message}) {
  const classes = useStyles();
  if (message === "")
    return null;
  if(message === 'Unauthorized')
    return(
      <div className={classes.root}>
        <Alert severity="error">{message}</Alert>
      </div>
    )
  return (
    <div className={classes.root}>
        <Alert severity="success">{message}</Alert>
      </div>
  )
};
