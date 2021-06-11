import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../Store';

const useStyles = makeStyles((theme) => ({
  appName: {
    flexGrow: 1,
    fontSize: 20,
    color: "#fff",
    '&:hover': {
      textDecoration: "none"
    }
  },
}));

const Header = () => {
  const entryState = useSelector((state: RootStore) => state.entry);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" className={classes.appName}>TOKIGAMES project</Link>
        <Typography variant="h6">
          {entryState.entries.length}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;