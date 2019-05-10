import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function DetailsPage() {
  return (
    <Card>
      <CardContent>
        <Typography>You are on a Vacation!!!</Typography>
      </CardContent>
      <CardActions>
        <NavLink to={'/listing'}>
          <Button variant={'contained'} color={'primary'}>
            Go back
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default DetailsPage;
