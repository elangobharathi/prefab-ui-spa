import React, { Component, Fragment } from 'react';
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <AppBar position={'sticky'}>
            <Toolbar>
              <NavLink to={'/'}>
                <Typography variant={'title'} style={{ color: 'white' }}>
                  Dashboard
                </Typography>
              </NavLink>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact={true} path={'/'} component={HomePage} />
            <Route path={'/listing'} component={ListingPage} exact={true} />
            <Route path={'/details'} component={DetailsPage} exact={true} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

function HomePage() {
  return (
    <NavLink to={'/listing'}>
      <Button variant={'raised'}>Go to Listing</Button>
    </NavLink>
  );
}

function ListingPage() {
  return (
    <List>
      <ListItem button={true}>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2019" />
      </ListItem>
      <ListItem button={true}>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary="Work" secondary="Feb 7, 2019" />
      </ListItem>
      <NavLink to={'/details'}>
        <ListItem button={true}>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
          <ListItemText primary="Vacation" secondary="Mar 8, 2019" />
        </ListItem>
      </NavLink>
    </List>
  );
}

function DetailsPage() {
  return (
    <Card>
      <CardContent>
        <Typography>You are on a Vacation!!!</Typography>
      </CardContent>
      <CardActions>
        <NavLink to={'/listing'}>
          <Button variant={'raised'} color={'primary'}>
            Go back
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
