import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeLink from 'next/link';
import Link from '@material-ui/core/Link'
import LoginLink from 'next/link'
import { auth } from '../utils/auth'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'white !important'
    }
  });

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <HomeLink href="/">
            <Typography variant="h5" className={classes.title}>
              <Link className={classes.link}>Heyclassic Community</Link>
            </Typography>
          </HomeLink>
          <LoginLink href="/login"><Button color="inherit">Login</Button></LoginLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}