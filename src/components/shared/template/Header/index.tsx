import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Link
} from "@material-ui/core";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
  })
);

const Header = () => {
  const classes = useStyles();
  //xs, sm, md, lg, xl
  return (
    <Container maxWidth="lg" disableGutters={true} >
      <AppBar position="static" 
        color="default"
        elevation={0}
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link
              variant="button"
              href="/"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              href="/dashboard"
              className={classes.link}
            >
              Dashboard
            </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
