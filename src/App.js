import React from 'react';
import Navbar from './Components/Navbar';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import styles from './CompStyles/style.module.css';
import MyInfo from './Components/Myinfo';

const useStyles = makeStyles({
  gamerStyles: {
    fontWeight: 700,
    flex: .5,
    textShadow: '2px 2px rgba(50,50,50,0.57)'
  },
  color: {
    backgroundColor: "crimson"
  }
})

function App() {

  const classes = useStyles();
  return (
    <div>

      <ThemeProvider theme={theme}>

        <AppBar position="static" className={classes.color}>
          <Toolbar>
            <Typography variant="h6" className={classes.gamerStyles}>
              Gamer's Weather
            </Typography>
          </Toolbar>
        </AppBar>
        <Navbar />

      </ThemeProvider>
      <MyInfo />
    </div>


  );
}

export default App;
