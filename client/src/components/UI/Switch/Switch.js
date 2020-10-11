import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);



export default function CustomSwitch(props) {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = (event) => {
      console.log("Switch changed")
    state.checked ? props.filterByRemote(false) : props.filterByRemote(true);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <FormControlLabel
        control={<PurpleSwitch checked={state.checked} onChange={handleChange} name="checked" />}
        label={props.labelText}
      />
      
  );
}
