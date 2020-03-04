import { Typography, Link } from '@material-ui/core'
import HomeLink from 'next/link'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <HomeLink href="/">
        <Link color="inherit">heyclassic.com</Link>
      </HomeLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};