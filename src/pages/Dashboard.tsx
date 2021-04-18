import DashboardIcon from '@material-ui/icons/Dashboard';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const Dashboard = () => {
    const classes = useStyles();
    return (<div className={classes.root}>
        <List component="nav">
          <ListItem >
            <ListItemIcon>
            <DashboardIcon /> 
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </div>    
    )
}

export default Dashboard;