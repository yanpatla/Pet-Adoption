import React, { useContext, useEffect } from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import petContext from "../../context/pet/petContext";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import Box from "@mui/material/Box";
import HeightIcon from "@mui/icons-material/Height";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

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
const PanelPets = () => {
  const PetContext = useContext(petContext);
  const { pets, getPets,  } = PetContext;
  let history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    getPets();
  }, []);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Picture</TableCell>
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
            <TableCell className={classes.tableHeaderCell}>Type </TableCell>
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
            <TableCell className={classes.tableHeaderCell}>
              <Box
                className={classes.pointers}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Breed <HeightIcon />
              </Box>
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              <Box
                className={classes.pointers}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Height/Weight <HeightIcon />
              </Box>
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Color</TableCell>
            <TableCell className={classes.tableHeaderCell}></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pets.map((pets) => (
            <TableRow className={classes.pointers} hover key={pets._id}>
              <TableCell component="th" scope="row">
                <Avatar alt="" src={pets.picture.url} />
              </TableCell>
              <TableCell>
                <Typography>{pets.name}</Typography>
              </TableCell>

              <TableCell>
                <Typography>{pets.animalType}</Typography>
              </TableCell>

              <TableCell>
                <Typography>{pets.adoptionStatus} </Typography>
              </TableCell>
              <TableCell>
                <Typography>{pets.breed} </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {pets.height}CM/{pets.weight}Kg{" "}
                </Typography>
              </TableCell>
              <TableCell>
                <Avatar
                  style={{
                    backgroundColor: `${pets.color}`,
                    color: "#000",
                  }}
                >
                  <PetsIcon />
                </Avatar>
              </TableCell>
              <TableCell
                onClick={() =>
                  history.push(`/admin-dashboard/edit-pet/${pets._id}`)
                }
              >
                <EditIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PanelPets;
