import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateRangeCalculator from '../Components/DateRangeCalculator'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    application: '',
    name: 'hi',
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div style={{margin : "0px 950px 0px 10px",display : "flex", direction : "row"}}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Application</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Application"
          inputProps={{
            name: 'application',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>BSA</option>
          <option value={20}>Digitization</option>
          <option value={30}>Donation Tracking</option>
          <option value={40}>Fresh2PI</option>
          <option value={50}>GSS</option>
          <option value={60}>GWFM</option>
          <option value={70}>SIT</option>
        </Select>
      </FormControl>
      {console.log(state.application)}
      <div style = {{ marginLeft : "40px"}}>
        <DateRangeCalculator appName = {state.application}/>
      </div>
      {/* <div style = {{marginLeft : "100px"}}>
        <PDFRenderComponent/>
      </div> */}
    </div>
  );
}

