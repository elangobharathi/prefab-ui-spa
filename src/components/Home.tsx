import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <NavLink to={'/listing'}>
      <Button variant={'contained'}>Go to Listing</Button>
    </NavLink>
  );
}

export default HomePage;
