import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow, useStyles } from './styles';

const TableCard = ({ visibleRows }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className="sticky">
          <TableRow>
            <StyledTableCell className={classes.id}>Id</StyledTableCell>
            <StyledTableCell className={classes.name}>Name</StyledTableCell>
            <StyledTableCell className={classes.sexBornDied}>Sex</StyledTableCell>
            <StyledTableCell className={classes.sexBornDied}>Born</StyledTableCell>
            <StyledTableCell className={classes.sexBornDied}>Died</StyledTableCell>
            <StyledTableCell className={classes.father}>Father</StyledTableCell>
            <StyledTableCell>Mother</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.sex}</StyledTableCell>
              <StyledTableCell>{row.born}</StyledTableCell>
              <StyledTableCell>{row.died}</StyledTableCell>
              <StyledTableCell>{row.father}</StyledTableCell>
              <StyledTableCell>{row.mother}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableCard;
