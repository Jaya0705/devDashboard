import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PDFRenderComponent from '../Components/GeneratePDF'


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


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default class WarrantySupportStatusGrid extends React.Component{
       
  render(){
  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={useStyles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Inflow</StyledTableCell>
            <StyledTableCell align="center">Resolved</StyledTableCell>
            <StyledTableCell align="center">Backlog</StyledTableCell>
            <StyledTableCell align="center">Aged > 30 days</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">Inflow status</StyledTableCell>
              <StyledTableCell align="center">Resolved Status</StyledTableCell>
              <StyledTableCell align="center">Backlog Status</StyledTableCell>
              <StyledTableCell align="center">Days count status</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}
}