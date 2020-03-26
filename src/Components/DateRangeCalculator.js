import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PDFRenderComponent from '../Components/GeneratePDF';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const years = [
    {
        value: 2020,
        label: 2020,
    },
    {
        value: 2021,
        label: 2021,
    },
    {
        value: 2022,
        label: 2022,
    },
    {
        value: 2023,
        label: 2023,
    },
    {
        value: 2024,
        label: 2024,
    },
  ];

let fromDate, toDate;
  
// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
    let date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // February Month is considered as Walmart Calendar year which is always in week 1.
    let week1 = new Date(date.getFullYear(), 1);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  }
  
  function getDateRangeOfWeek(weekNo, y){
      let d1, numOfdaysPastSinceLastMonday, rangeIsFrom, rangeIsTo;
      d1 = new Date(''+y+'');
      numOfdaysPastSinceLastMonday = d1.getDay() - 6;
      d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
      d1.setDate(d1.getDate() + (7 * (weekNo - d1.getWeek())));
      rangeIsFrom = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear();
      d1.setDate(d1.getDate() + 6);
      rangeIsTo = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear() ;
      fromDate = rangeIsFrom;
      toDate = rangeIsTo;
  };

  export default function DateRangeCalculator(){
    const classes = useStyles();
    
    const [state, setState] = React.useState({
      weekNumber: 1,   
      errorText : false,
      helperText : '',
      
    });

    const [year, setYear] = React.useState(2020);
    
    const handleYearChange = event => {
        setYear(event.target.value);
    }
  
    const handleWeekChange = event => {
        if(event.target.value >= 1 && event.target.value <= 53 ){
            setState({
                ...state,
                weekNumber: event.target.value,
                errorText : false,
                helperText : ''
              });
        }
        else {
            setState({
                ...state,
                weekNumber : '',
                errorText : true,
                helperText : "Enter week number between 1 and 53"
            })
        }
     
    };

      return(
        <div>
              {/* {console.log("First week of 2020: " + getDateRangeOfWeek(1, 2020))} 
              {console.log("Last week of 2020 (53 weeks): " + getDateRangeOfWeek(53, 2020))}  */}              
              {/* Checked for 2021(future date) - date.getFullYear() gets the current year, set manually and check */}
              {/* {console.log("First week of 2021: " + getDateRangeOfWeek(1, 2021))} 
              {console.log("last week of 2021: " + getDateRangeOfWeek(52, 2021))}  */}

            <form className={classes.root} autoComplete="off" style = {{display : "flex", flexDirection : "row"}}>
                    <TextField
                        helperText={state.helperText}
                        onChange={handleWeekChange.bind(this)}
                        error={state.errorText}
                        required
                        id="outlined-required"
                        label="Week Number"
                    />
                    
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Native select"
                        // value={year}
                        onChange={handleYearChange.bind(this)}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined"
                        >
                        {years.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
            </form>
            {console.log(state.weekNumber + " *** " + year)}
            {   
                    getDateRangeOfWeek(state.weekNumber, year)        
            }
            <br/>
            <br/>
            <br/>
            <br/>
            <form className={classes.root} autoComplete="off" style = {{display : "flex", flexDirection : "row"}}>
            <TextField
                id="standard-read-only-input"
                label="From"
                value= {fromDate}
                InputProps={{
                    readOnly: true,
                }}
            />
             <TextField
                id="standard-read-only-input"
                label="To"
                value= {toDate}
                InputProps={{
                    readOnly: true,
                }}
            />
            </form>
            <PDFRenderComponent/>
        </div>
      )
  }
  