import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
// import EditTable from 'material-ui-table-edit';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(47, 155, 255)",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(app, userstories, storypoints, proddefects, rag,poc) {
    return { app, userstories, storypoints, proddefects, rag,poc };
  }

const data = [
  createData('Digitization', 5, 0, 0, 'R','xxx'),
  createData('SIT', 4, 10, 1, 'A','yyy'),
  createData('BSA', 2, 16, 2, 'G',"xx"),
  createData('Donation Tracking', 3, 3, 0, 'R',"yyy"),
  createData('Fresh 2PI', 5, 16, 0, 'A',"yyy"),
];

const useStyles = makeStyles({
  table: {
    //minWidth: 700,
    //width : '100%'
    // paddingLeft : '100px'
    //marginRight :"1000px"
    left : "0px"
  },
});

const rows = []
 
const onChange = (row) => {
  console.log(row)
}

export default class CustomizedTables extends React.Component{
    state = {
        appDetails: []
    }

    componentDidMount() {
        this.fetchAppDetails();
    }

   fetchAppDetails() {
       fetch(`http://localhost:5000/api/getAppSummary`)
         .then(response => response.json())
         .then(data => {
                this.setState({
                    appDetails: data
                })
          })
       }
       

  render(){
  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={useStyles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Application</StyledTableCell>
            <StyledTableCell align="center">#UserStories</StyledTableCell>
            <StyledTableCell align="center">#StoryPoints</StyledTableCell>
            <StyledTableCell align="center">#ProductionDefects</StyledTableCell>
            <StyledTableCell align="center">R/A/G</StyledTableCell>
            <StyledTableCell align="center">POC</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <StyledTableRow key={row.App}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.app}
              </StyledTableCell>
              <StyledTableCell align="center">{row.userstories}</StyledTableCell>
              <StyledTableCell align="center">{row.storypoints}</StyledTableCell>
              <StyledTableCell align="center">{row.proddefects}</StyledTableCell>
              <StyledTableCell align="center">{row.rag}</StyledTableCell>
              <StyledTableCell align="center">{row.poc}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        {/* <EditTable
                onChange={onChange}
                rows={rows}
                headerColumns={this.state.appDetails}
                enableDelete={true}
    /> */}
  </div>
  );
}
}