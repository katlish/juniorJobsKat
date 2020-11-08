import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
  switchBase: {
    color: "#BB86FC",
    '&$checked': {
      color: "#BB86FC",
    },
    '&$checked + $track': {
      backgroundColor: "#BB86FC",
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
    state.checked ? props.filterByRemote(false) : props.filterByRemote(true);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <FormControlLabel
        control={<PurpleSwitch checked={state.checked} onChange={handleChange} name="checked" />}
        label={props.labelText}
        labelPlacement="start"
      />
      
  );
}
