import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Link
} from 'react-router-dom';

// ICONS
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RegisterIcon from '@material-ui/icons/Input';
import ErrorIcon from '@material-ui/icons/Error';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CommentIcon from '@material-ui/icons/Comment';
// Components
import Err from '../404/error';
import Register from '../form/form';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div>
        <List>
          <ListItem button key="home" component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
          <ListItem button key="comment" component={Link} to="/c">
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText>
              Comments
            </ListItemText>
          </ListItem>
          <ListItem button key="comment" component={Link} to="/nc">
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText>
              New comments
            </ListItemText>
          </ListItem>
          <ListItem button key="register" component={Link} to="/r">
            <ListItemIcon>
              <RegisterIcon />
            </ListItemIcon>
            <ListItemText>
              Register
            </ListItemText>
          </ListItem>
          <ListItem button key="users" component={Link} to="/u">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>
              Users
            </ListItemText>
          </ListItem>
          <ListItem button key="error" component={Link} to="/e">
            <ListItemIcon>
              <ErrorIcon />
            </ListItemIcon>
            <ListItemText>
              Error
            </ListItemText>
          </ListItem>
        </List>
      </div>
      <Divider />
    </div>
  );

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
