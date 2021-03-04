/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { Button } from "@dhis2/ui";
import { Cancel, Settings } from "@dhis2/ui-icons";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  table: {
    width: "100%",
  },
  paper: {
    width: "100%",
  },
  rowHead: {
    background: "lightgrey",
  },
  tableHeading: {
    fontSize: "18px",
    textAlign: "center",
    fontWeight: 600,
  },
  tableSubHeading: {
    fontSize: "16px",
    textAlign: "center",
    fontWeight: 600,
  },
  input: {
    textAlign: "center",
  },
  textCenterWaring: {
    textAlign: "center",
    color: "#2c6693",
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: "monospace",
  },
  labelBold: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 600,
    background: "#efefef",
  },
  textField: {
    width: 200,
  },
  textCenterBody: {
    textAlign: "center",
  },
});

function LineListTable({ ouID, editSelectedTEI }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [lineList, setLineList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    if (ouID !== "") {
      getLineListData();
    }
  }, []);

  useEffect(() => {
    if (ouID !== "") {
      getLineListData();
    }
  }, [ouID]);

  const getLineListData = async () => {
    try {
      const response = await axios.get(
        `../../trackedEntityInstances.json?ou=${ouID}&program=l7yNHuZs4io&fields=*`
      );
      console.log("Response", response?.data.trackedEntityInstances);
      if (response?.data.trackedEntityInstances.length > 0) {
        setLineList([...response?.data?.trackedEntityInstances]);
      } else {
        setLineList([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTEI = async (tei) => {
    try {
      const response = await axios.delete(
        `../../trackedEntityInstances/${tei}`
      );

      if (response.data.httpStatusCode === 200) {
        console.log(response.data.message);
        getLineListData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editTEI = (tei) => {
    console.log(tei);
  };

  const lineItemEnrollment = (enrollments, id) => {
    let enrollMentValue = "";
    if (enrollments.length > 0 && enrollments !== undefined) {
      for (let i = 0; i < enrollments[0].events.length; i++) {
        if (enrollments[0].events[i].programStage === "LvHGKEqTeQL") {
          for (let j = 0; j < enrollments[0].events[i].dataValues.length; j++) {
            if (enrollments[0].events[i].dataValues[j].dataElement === id) {
              enrollMentValue = enrollments[0].events[i].dataValues[j].value;
            }
          }
        }
      }
    }
    return enrollMentValue;
  };

  const lineItemAttribute = (attributes, id) => {
    let attributeValue = "";
    if (attributes.length > 0 && attributes !== undefined) {
      for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].attribute === id) {
          attributeValue = attributes[i].value;
        }
      }
    }
    return attributeValue;
  };

  const handleChangePage = (event, newPage) => {
    console.log("newPage", newPage, event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  console.log("Line List", lineList);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.rowHead}>
                <TableCell
                  className={classes.tableSubHeading}
                  component="th"
                  scope="row"
                >
                  First Name
                </TableCell>
                <TableCell
                  className={classes.tableSubHeading}
                  component="th"
                  scope="row"
                >
                  Last Name
                </TableCell>
                <TableCell
                  className={classes.tableSubHeading}
                  component="th"
                  scope="row"
                >
                  Sex
                </TableCell>
                <TableCell
                  className={classes.tableSubHeading}
                  component="th"
                  scope="row"
                >
                  D.O.B
                </TableCell>
                <TableCell
                  className={classes.tableSubHeading}
                  component="th"
                  scope="row"
                >
                  State underlying code
                </TableCell>
                <TableCell
                  className={classes.tableSubHeading}
                  component="th"
                  scope="row"
                >
                  ICD code or underlying code
                </TableCell>
                <TableCell
                  className={classes.tableSubHeading}
                  component="th"
                  scope="row"
                >
                  Edit/Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lineList.length > 0 && lineList !== undefined ? (
                stableSort(lineList, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((lineItem, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell
                          className={classes.textCenterBody}
                          component="td"
                          scope="row"
                        >
                          {lineItemAttribute(
                            lineItem.attributes,
                            "GsIQgzKc1MJ"
                          )}
                        </TableCell>
                        <TableCell
                          className={classes.textCenterBody}
                          component="td"
                          scope="row"
                        >
                          {lineItemAttribute(
                            lineItem.attributes,
                            "fDqh6LRtP7v"
                          )}
                        </TableCell>
                        <TableCell
                          className={classes.textCenterBody}
                          component="td"
                          scope="row"
                        >
                          {lineItemAttribute(
                            lineItem.attributes,
                            "rMXEmkz6UHe"
                          )}
                        </TableCell>
                        <TableCell
                          className={classes.textCenterBody}
                          component="td"
                          scope="row"
                        >
                          {lineItemAttribute(
                            lineItem.attributes,
                            "XjrUFCJztS7"
                          )}
                        </TableCell>
                        <TableCell
                          className={classes.textCenterBody}
                          component="td"
                          scope="row"
                        >
                          {lineItemEnrollment(
                            lineItem.enrollments,
                            "MxJp2CzIsYS"
                          )}
                        </TableCell>
                        <TableCell
                          className={classes.textCenterBody}
                          component="td"
                          scope="row"
                        >
                          {lineItemEnrollment(
                            lineItem.enrollments,
                            "mYUCnp4QBsD"
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="btn-td">
                            <Button
                              name="Icon button"
                              icon={Settings({ className: "svg-0" })}
                              className="tbtn tableBtn"
                              onClick={() => {
                                editSelectedTEI(
                                  lineItem.trackedEntityInstance,
                                  lineItem,
                                  "edit"
                                );
                              }}
                              primary
                              type="button"
                              value="default"
                            />
                            <Button
                              name="Icon button"
                              className="tbtn"
                              icon={Cancel({ className: "svg-0" })}
                              onClick={() => {
                                deleteTEI(lineItem.trackedEntityInstance);
                              }}
                              destructive
                              type="button"
                              value="default"
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : ouID === "" ? (
                <TableRow
                  className={classes.textCenterWaring}
                  colspan="6"
                  rowspan="1"
                >
                  <TableCell
                    className={classes.textCenterWaring}
                    component="td"
                    scope="row"
                    colspan="6"
                  >
                    Please Select Program OrganisationUnit For Records.....
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow
                  className={classes.textCenterWaring}
                  colspan="6"
                  rowspan="1"
                >
                  <TableCell
                    className={classes.textCenterWaring}
                    colspan="6"
                    component="td"
                    scope="row"
                  >
                    Oops, There it seems there is no Record for Selected Program
                    OrganisationUnit ....
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {lineList.length > 0 ? (
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={lineList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        ) : null}
      </Paper>
    </div>
  );
}

LineListTable.propsTypes = { ouID: PropTypes.String };

export default LineListTable;
