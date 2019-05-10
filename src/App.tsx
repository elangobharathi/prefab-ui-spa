import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import HomePage from './components/Home';
import ListingPage from './components/Listing';
import DetailsPage from './components/Details';

class App extends Component {
  constructor(props: any) {
    super(props);
    console.log(process.env);
    App.fetchGreeting();
  }

  private static async fetchGreeting() {
    const response = await fetch('/greet?name=user').then(response => response.json());
    console.log(response);
  }

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
