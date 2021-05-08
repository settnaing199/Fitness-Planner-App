import React from "react";
// import Exercise from './exercise';
// import {muscleTypes} from '../data/muscleTypes.js';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const Exerciselist = ({exerciselist}) => {
    const classes = useStyles();
 
    return (
      <div className="table">
      <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Exercise</TableCell>
            <TableCell align="right">Sets</TableCell>
            <TableCell align="right">Reps/Secs</TableCell>
            <TableCell align="right">Muscles</TableCell>

    
          </TableRow>
        </TableHead>
        <TableBody>
          {exerciselist.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.move}
              </TableCell>
              <TableCell align="right">{row.reps}</TableCell>
              <TableCell align="right">{row.sets}</TableCell>
              <TableCell align="right">{row.muscles}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer> 
      </div>
    );
  };
  
  export default Exerciselist;