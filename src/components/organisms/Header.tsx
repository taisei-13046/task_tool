import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom'
import { ArrowLeft } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));


export const Header = () => {
  const classes = useStyles();
  const history = useHistory()
  const onClickGanttButton = () => {
    history.push('/gantt')
  }
  const onClickTaskButton = () => {
    history.push('/task')
  }
  const onClickHomeButton = () => {
    history.push('/')
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Task Tool
          </Typography>
          <Button color="inherit" onClick={onClickHomeButton}>Home</Button>
          <Button color="inherit" onClick={onClickGanttButton}>Gantt</Button>
          <Button color="inherit" onClick={onClickTaskButton}>Task</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
