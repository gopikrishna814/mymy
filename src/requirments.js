import React,{useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Height } from '@material-ui/icons';


export default function Requirments() {
  const [mode,setmode]= useState(false);
  function modalFun(){
    setmode(!mode);
    alert("hell");
    }
  return (
    <div style={{background:"white" ,Height:"100%"}}>
    
    <FormControl component="fieldset">

      <FormLabel  onClick={()=>modalFun()}
   component="legend">Online Presence</FormLabel>
      <FormGroup aria-label="position" > 
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Website"
          labelPlacement="end"
        /> 
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Mobile Application"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Campagins"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Social Networks"
          labelPlacement="end"
        /> 
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Marketing Automation"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Leads Generation"
          labelPlacement="end"
        />
         <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Advertisments"
          labelPlacement="end"
        /> 
        
      </FormGroup>
      <FormLabel component="legend">Business Language</FormLabel>
      <FormGroup aria-label="position"> 
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="English"
          labelPlacement="end"
        /> 
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Spanish"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Russian"
          labelPlacement="end"
        />
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Portuguese"
          labelPlacement="end"
        />
      </FormGroup>
      <FormLabel component="legend">Stay connected </FormLabel>
      <FormGroup aria-label="position"> 
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Facebook"
          labelPlacement="end"
        /> 
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Instagram"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Twitter"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Yelp"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Google"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="pinterest"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Yellow pages"
          control={<Checkbox color="primary" />}
          label="Twitter"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Yellow pages"
          control={<Checkbox color="primary" />}
          label="Apple maps"
          labelPlacement="end"
        />
      </FormGroup>
      <FormLabel component="legend">Play Ads</FormLabel>
      <FormGroup aria-label="position"> 
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Facebook"
          labelPlacement="end"
        /> 
          <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Instagram"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Google"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  
  </div>);
}
