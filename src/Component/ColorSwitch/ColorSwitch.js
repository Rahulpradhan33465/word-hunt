import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { cyan, grey } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
 

const PurpleSwitch = withStyles({
  switchBase: {
    color: cyan[300],
    '&$checked': {
      color: cyan[500],
    },
    '&$checked + $track': {
      backgroundColor:grey[400],
    },
  },
  checked: {},
  track: {},
})(Switch);



export default function ColorSwitch({lightTheme,setLightTheme}) {
//   console.log(lightTheme)
 
  return (
    <FormGroup>
      <FormControlLabel
        control={<PurpleSwitch onClick={()=>setLightTheme(!lightTheme)}  name="checkedA" />}
        label={lightTheme?"Dark Theme":"Light Theme"}
      />
      
    </FormGroup>
  );
}