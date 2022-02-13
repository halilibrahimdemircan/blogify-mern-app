import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core'
import {CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton} from "@material-ui/core"
import PenIcon from "@material-ui/icons/Create";
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3)
  }
}))

const App = () => {

  const classes = useStyles()
  return (
    <>
    <CssBaseline/>
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit' elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.container} color="inherit" />
          <Typography variant='h6' color='secondary' className={classes.title}>
            <a href='http://localhost:3000/posts'>Blogify</a>
          </Typography>
          <Button color='primary' variant='outlined' startIcon={<PenIcon/>}>Yeni Yazı</Button>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container} >
        <Grid item xs={12}>
          <Router>
            <Routes>
              <Route exact path='/posts' component={PostList}/>
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </Container>
    
    
    </>
  )
}

export default App
