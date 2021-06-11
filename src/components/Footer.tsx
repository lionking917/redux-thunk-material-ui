import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appName: {
    flexGrow: 1,
    textAlign: "center"
  },
  footer: {
    position: 'absolute',
    top: 'auto',
    bottom: 0
  },
  about: {
    color: "#fff"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.footer}>
      <Toolbar>
        <Typography variant="h6" className={classes.appName}>
          CopyRight TOKIGAMES@2021
        </Typography>
        <Link href="/about" className={classes.about}>About</Link>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;