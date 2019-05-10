import React from 'react';
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

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

export default ListingPage;
