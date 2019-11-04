import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Countries from '../../assets/data/countries2.json'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';


//ToDo
//Flag Images // Done
//Correctly Bring in the images to left of Country Name //Done
// SeconddaryText ->[ + '    +'+ Countries[selectedIndex][2] ]
//Replace primary text to selected Country // Decided on going with Secondary Text instead

//Migrate this to main app
//Connect with backend/state

//TODO TODO TODO
//Switch Default Message with US Flag / Code
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //Toggle css from ListItemText to Image + Intl Code
//Replace secondary naming to JUST Flag and Code instead of words

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  textField:{
    display: 'flex',
    paddingTop: 30,
    width: 125,
    maxWidth: 300
  }
}));

export default function SimpleListMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Please Select Country"
          onClick={handleClickListItem}
        >
          <img src={`https://www.countryflags.io/${Countries[selectedIndex][1]}/shiny/64.png`} alt='flagImage' width='55px'/>
          <ListItemText primary="Please Select Country" secondary={Countries[selectedIndex][0]}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        {Countries.map((country, index) => {

          return    <MenuItem
          key={country}
          disabled={index === selectedIndex}
          selected={index === selectedIndex}
          onClick={event => handleMenuItemClick(event, index)}
        >
        <img src={`https://www.countryflags.io/${country[1]}/shiny/64.png`} alt='flag' width="30px"/> {country[0]} |   +({country[2]})
        </MenuItem>
        }
        )}
      </Menu>
      <TextField className={classes.textField}/>
    </div>
  );
}