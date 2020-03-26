import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
    const [selectedFromDate, setSelectedFromDate] = React.useState(new Date('2020-03-23T21:11:54'));
    const [selectedToDate, setSelectedToDate] = React.useState(new Date('2020-03-28T21:11:54'));
   
    const handleFromDateChange = date => {
      setSelectedFromDate(date);
    };
   
    const handleToDateChange = date => {
      setSelectedToDate(date);
    };

  return (
      <div style={{display:"flex",flexDirection:"row",width :"120%"}}>
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="From"
            value={selectedFromDate}
            onChange={handleFromDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </Grid>
        </MuiPickersUtilsProvider>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={selectedToDate}
            onChange={handleToDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </Grid>
        </MuiPickersUtilsProvider>
      </div>
  );
}

