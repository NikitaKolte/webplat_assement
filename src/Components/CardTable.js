import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import visa from "../styles/visa.png";
import mestro from "../styles/mestro.png";
import masterCard from "../styles/Mastercard_2019_logo.svg";
import rupay from "../styles/rupay.jpeg";

const useStyles = makeStyles({
  table: {
    minWidth: 422,
  },
});

export default function CardTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <img src={visa} alt="visa" height="30px" width="50px" />
            </TableCell>
            <TableCell align="left">Visa cards</TableCell>
            <TableCell align="right">
              <button className="buttonStyle">Activated</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src={masterCard} alt="visa" height="30px" width="50px" />
            </TableCell>
            <TableCell align="left">Master cards</TableCell>
            <TableCell align="right">
              <button className="buttonStyle">Activated</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src={rupay} alt="visa" height="30px" width="50px" />
            </TableCell>
            <TableCell align="left">Rupay cards</TableCell>
            <TableCell align="right">
              <button className="buttonStyle">Activated</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src={mestro} alt="visa" height="30px" width="50px" />
            </TableCell>
            <TableCell align="left">Maestro cards</TableCell>
            <TableCell align="right">
              <button className="buttonStyle">Activated</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
