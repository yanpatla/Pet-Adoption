import React, { useContext, useEffect } from "react";
import adminContext from "../../context/admin/adminContex";
import { Avatar, makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import Box from "@mui/material/Box";
import HeightIcon from "@mui/icons-material/Height";
import Typography from "@mui/material/Typography";
 
import {  useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    alignContent: "center",
  },
  tableHeaderCell: {
    fontWeight: 700,
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.getContrastText(theme.palette.warning.main),
  },
  pointers: {
    cursor: "pointer",
  },
}));
const PanelUsers = () => {
  const AdminContext = useContext(adminContext);
  const { getUsers, users } = AdminContext;
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Profile</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              <Box
                className={classes.pointers}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Full name <SortByAlphaIcon />
              </Box>
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>E-mail </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Phonen Number{" "}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              <Box
                className={classes.pointers}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Status <HeightIcon />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow
              className={classes.pointers}
              hover
              key={user._id}
              onClick={() => history.push(`/admin-dashboard/user/${user._id}`)}
            >
              {user.adoptedPets.length > 0 || user.role === true ? (
                <>
                  <TableCell component="th" scope="row">
                    <Avatar>
                      {" "}
                      {user.name[0]}
                      {user.lastName[0]}
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {user.name} {user.lastName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{user.phoneNumber}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {user.role === true ? "Admin" : "User"}
                    </Typography>
                  </TableCell>
                </>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PanelUsers;
