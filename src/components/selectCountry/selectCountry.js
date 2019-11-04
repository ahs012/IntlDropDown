import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Countries from '../../assets/data/countries2.json';

// Fix Thumbnail IMG size
// Insert TextInput inside the container
// plug into app

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250,
      maxWidth:300
    },
    menu: {
      width: 600
    }
  }));
  
export default function MultilineTextFields() {
    const classes = useStyles();
    const [country, setCountry] = React.useState(1);
  
    const handleChange = event => {
      setCountry(event.target.value);
    };
  
return (
    <form className={classes.container} noValidate autoComplete="off">
    <div>
        <TextField 
        id="countrySelection"
        select
        label="Select"
        className={classes.textField}
        value={country}
        onChange={handleChange}
        SelectProps={{
            MenuProps: {
            className: classes.menu,
            },
        }}
        helperText="Please Select Country"
        margin="normal"
        variant="outlined"
        >
        {Countries.map((country, index) => (
            <MenuItem 
            key={country} 
            value={country[2]}>
            <img alt='flagImage' src={`https://www.countryflags.io/${country[1]}/shiny/64.png`} width='12%'/>
            &nbsp;&nbsp;{country[0]}  &nbsp; +({country[2]})
            </MenuItem>
        ))}
        </TextField>
    </div>
    </form>
    );
  }