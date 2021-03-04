/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import CheckBox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import * as ECT from "@whoicd/icd11ect";
import "@whoicd/icd11ect/style.css";
import DropDown from "../DropDown/DropDown";
import axios from "axios";

const useStyles = makeStyles({
  table: {
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
  labelBold: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 600,
    background: "#efefef",
  },
  textField: {
    width: 200,
  },
});

function TableComponent({
  setFormData,
  formData,
  VHe0VCpfsTO,
  setValue1,
  oIjRcRwdQ23,
  setValue2,
  wCLuXx7mmLN,
  setValue3,
  imrk7rghkJP,
  setValue4,
  iutxAZDrht3,
  setValue5,
  fpffVuDDOHZ,
  setValue6,
  FVWDju0Sh69,
  setValue7,
  Tih7qn0JLAd,
  setValue8,
  editMode,
}) {
  const classes = useStyles();
  const [mfValues, setMfValues] = useState([]);
  const [timeIntervalValues1, setTimeInterValues1] = useState([]);
  const [timeIntervalValues2, setTimeInterValues2] = useState([]);
  const [timeIntervalValues3, setTimeInterValues3] = useState([]);
  const [timeIntervalValues4, setTimeInterValues4] = useState([]);
  const [icdName, setIcdNames] = useState([]);
  const [icdCode, setIcdCode] = useState([]);
  const [wasDeceasedWomanValues, setWasDeceasedWomanValues] = useState([]);
  const [deceasedPregnantValues, setDeceasedPregnantValues] = useState([]);
  const [
    pregnancyContributeToDeathValues,
    setPregnancyContributeToDeathValues,
  ] = useState([]);

  console.log(
    "ICD------------------------------------------------------",
    icdName,
    icdCode
  );
  useEffect(() => {
    getMaleFemaleDropDownData();
    timeIntervalData1();
    timeIntervalData2();
    timeIntervalData3();
    timeIntervalData4();
    wasDeceasedWomanData();
    deceasedPregnantData();
    pregnancyContributeToDeathData();
  }, []);

  // Use Effect Function for checking the state of - ICD Code  Search
  useEffect(() => {
    setIcdNames([
      VHe0VCpfsTO ? { id: VHe0VCpfsTO, name: VHe0VCpfsTO } : "",
      wCLuXx7mmLN ? { id: wCLuXx7mmLN, name: wCLuXx7mmLN } : "",
      iutxAZDrht3 ? { id: iutxAZDrht3, name: iutxAZDrht3 } : "",
      FVWDju0Sh69 ? { id: FVWDju0Sh69, name: FVWDju0Sh69 } : "",
    ]);
    setIcdCode([
      oIjRcRwdQ23 !== "" ? { id: oIjRcRwdQ23, name: oIjRcRwdQ23 } : "",
      imrk7rghkJP !== "" ? { id: imrk7rghkJP, name: imrk7rghkJP } : "",
      fpffVuDDOHZ !== "" ? { id: fpffVuDDOHZ, name: fpffVuDDOHZ } : "",
      Tih7qn0JLAd !== "" ? { id: Tih7qn0JLAd, name: Tih7qn0JLAd } : "",
    ]);
  }, [
    VHe0VCpfsTO,
    setValue1,
    oIjRcRwdQ23,
    setValue2,
    wCLuXx7mmLN,
    setValue3,
    imrk7rghkJP,
    setValue4,
    iutxAZDrht3,
    setValue5,
    fpffVuDDOHZ,
    setValue6,
    FVWDju0Sh69,
    setValue7,
    Tih7qn0JLAd,
    setValue8,
  ]);

  const autoSelectICdCode = (value) => {
    if (VHe0VCpfsTO === value) {
      return oIjRcRwdQ23;
    }
    if (wCLuXx7mmLN === value) {
      return imrk7rghkJP;
    }
    if (iutxAZDrht3 === value) {
      return fpffVuDDOHZ;
    }
    if (FVWDju0Sh69 === value) {
      return Tih7qn0JLAd;
    }
  };

  const icdNameDropDown = (value) => {
    setFormData({
      ...formData,
      MxJp2CzIsYS: value,
      mYUCnp4QBsD: autoSelectICdCode(value),
    });
  };

  //  Structure of Function ----- 1. DropDown Data API CAll ----2.Handle Change function *** Start
  const getMaleFemaleDropDownData = async () => {
    try {
      const response = await axios.get(
        "../../trackedEntityAttributes/rMXEmkz6UHe.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setMfValues(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMFDropDownChange = (value) => {
    setFormData({ ...formData, rMXEmkz6UHe: value });
  };

  const timeIntervalData1 = async () => {
    try {
      const response = await axios.get(
        "../../dataElements/frzbIQRjEfM.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setTimeInterValues1(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const timeIntervalDropDownChange1 = (value) => {
    setFormData({ ...formData, frzbIQRjEfM: value });
  };

  const timeIntervalData2 = async () => {
    try {
      const response = await axios.get(
        "../../dataElements/hPW8XCsagrj.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setTimeInterValues2(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const timeIntervalDropDownChange2 = (value) => {
    setFormData({ ...formData, hPW8XCsagrj: value });
  };

  const timeIntervalData3 = async () => {
    try {
      const response = await axios.get(
        "../../dataElements/HaxZrFkw3Ub.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setTimeInterValues3(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const timeIntervalDropDownChange3 = (value) => {
    setFormData({ ...formData, HaxZrFkw3Ub: value });
  };

  const timeIntervalData4 = async () => {
    try {
      const response = await axios.get(
        "../../dataElements/pWdIeszmC3H.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setTimeInterValues4(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const timeIntervalDropDownChange4 = (value) => {
    setFormData({ ...formData, pWdIeszmC3H: value });
  };

  const wasDeceasedWomanData = async () => {
    try {
      const response = await axios.get(
        "../../dataElements/R7iHsoO0RpH.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setWasDeceasedWomanValues(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const wasDeceasedWomanDropDownChange = (value) => {
    setFormData({ ...formData, R7iHsoO0RpH: value });
  };

  const deceasedPregnantData = async () => {
    try {
      const response = await axios.get(
        "../../dataElements/WRVOUWqEtMe.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setDeceasedPregnantValues(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const deceasedPregnantDropDownChange = (value) => {
    setFormData({ ...formData, WRVOUWqEtMe: value });
  };

  const pregnancyContributeToDeathData = async () => {
    try {
      const response = await axios.get(
        "../../dataElements/EmUH7hTE6Mt.json?fields=id,name,optionSet[id,name,options[id,name]]"
      );
      setPregnancyContributeToDeathValues(response?.data?.optionSet?.options);
    } catch (error) {
      console.error(error);
    }
  };

  const pregnancyContributeToDeathDropDownChange = (value) => {
    setFormData({ ...formData, EmUH7hTE6Mt: value });
  };

  // Structure of Function **** END

  //Pregnancy Change
  const handleSurgeyDropDown = (value) => {
    setFormData({
      ...formData,
      xhbB2g4vIuo: value === "Yes" ? "true" : "false",
    });
  };

  const handleAutopsyDropDown = (value) => {
    setFormData({
      ...formData,
      J9wAYdeEuQa: value === "Yes" ? "true" : "false",
    });
  };

  const openModal = (value) => {
    var modal = document.getElementById("myModal" + value);
    modal.style.display = "block";
  };

  const closeModal = (value) => {
    ECT.Handler.clear(`${value}`);
    document.getElementById("selected-element-" + value).innerHTML = "";
    var modal = document.getElementById("myModal" + value);
    modal.style.display = "none";
  };

  const handleChange = (e) => {
    const tId = e.target.id;
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
          ? "true"
          : "false"
        : e.target.value;
    setFormData({ ...formData, [tId]: value });
  };

  const mySettings = {
    apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
    language: "en",
  };

  const myCallbacks = {
    selectedEntityFunction: (selectedEntity) => {
      console.log("Selected Entity", selectedEntity);
      document.getElementById(
        "selected-element-" + selectedEntity.iNo
      ).innerHTML =
        "Your selection is: " +
        selectedEntity.code +
        " - " +
        selectedEntity.bestMatchText;

      setICDFeildsValue(
        selectedEntity.bestMatchText,
        selectedEntity.code,
        selectedEntity.iNo
      );
    },
  };

  const setICDFeildsValue = (text, value, currentValue) => {
    if (currentValue === "1") {
      setValue1(text);
      setValue2(value);
    }
    if (currentValue === "2") {
      setValue3(text);
      setValue4(value);
    }
    if (currentValue === "3") {
      setValue5(text);
      setValue6(value);
    }
    if (currentValue === "4") {
      setValue7(text);
      setValue8(value);
    }
  };

  useEffect(() => {
    ECT.Handler.configure(mySettings, myCallbacks);
  }, []);

  useEffect(() => {
    console.log("Hi, iam form Data --- > ", formData);
    if (editMode) {
      getMaleFemaleDropDownData();
      timeIntervalData1();
      timeIntervalData2();
      timeIntervalData3();
      timeIntervalData4();
      wasDeceasedWomanData();
      deceasedPregnantData();
      pregnancyContributeToDeathData();
    }
  }, [formData]);

  return (
    <>
      <div id="myModal1" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              closeModal(1);
            }}
          >
            &times;
          </span>
          <div
            style={{
              fontSize: "18px",
              padding: "20px",
              textAlign: "center",
              background: "#FFF",
            }}
          >
            Search from ICD Tool
          </div>
          <div
            style={{
              background: "antiquewhite",
              padding: "20px",
              textAlign: "center",
            }}
          >
            Type for starting search :{" "}
            <input
              type="text"
              style={{ marginRight: "10px", padding: "5px" }}
              className="ctw-input"
              autoComplete="off"
              data-ctw-ino="1"
            />
            <span
              className="clear"
              style={{ cursor: "pointer", padding: "2px" }}
              onClick={() => {
                ECT.Handler.clear("1");
              }}
            >
              ❌
            </span>
            <div id="selected-element-1"></div>
          </div>
          <div className="ctw-window" data-ctw-ino="1"></div>
        </div>
      </div>

      <div id="myModal2" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              closeModal(2);
            }}
          >
            &times;
          </span>
          <div
            style={{
              fontSize: "18px",
              padding: "20px",
              textAlign: "center",
              background: "#FFF",
            }}
          >
            Search from ICD Tool
          </div>
          <div
            style={{
              background: "antiquewhite",
              padding: "20px",
              textAlign: "center",
            }}
          >
            Type for starting search :{" "}
            <input
              type="text"
              style={{ marginRight: "10px", padding: "5px" }}
              className="ctw-input"
              autoComplete="off"
              data-ctw-ino="2"
            />
            <span
              className="clear"
              style={{ cursor: "pointer", padding: "2px" }}
              onClick={() => {
                ECT.Handler.clear("1");
              }}
            >
              ❌
            </span>
            <div id="selected-element-2"></div>
          </div>
          <div className="ctw-window" data-ctw-ino="2"></div>
        </div>
      </div>

      <div id="myModal3" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              closeModal(3);
            }}
          >
            &times;
          </span>
          <div
            style={{
              fontSize: "18px",
              padding: "20px",
              textAlign: "center",
              background: "#FFF",
            }}
          >
            Search from ICD Tool
          </div>
          <div
            style={{
              background: "antiquewhite",
              padding: "20px",
              textAlign: "center",
            }}
          >
            Type for starting search :{" "}
            <input
              type="text"
              style={{ marginRight: "10px", padding: "5px" }}
              className="ctw-input"
              autoComplete="off"
              data-ctw-ino="3"
            />
            <span
              className="clear"
              style={{ cursor: "pointer", padding: "2px" }}
              onClick={() => {
                ECT.Handler.clear("1");
              }}
            >
              ❌
            </span>
            <div id="selected-element-3"></div>
          </div>
          <div className="ctw-window" data-ctw-ino="3"></div>
        </div>
      </div>

      <div id="myModal4" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              closeModal(4);
            }}
          >
            &times;
          </span>
          <div
            style={{
              fontSize: "18px",
              padding: "20px",
              textAlign: "center",
              background: "#FFF",
            }}
          >
            Search from ICD Tool
          </div>
          <div
            style={{
              background: "antiquewhite",
              padding: "20px",
              textAlign: "center",
            }}
          >
            Type for starting search :{" "}
            <input
              type="text"
              style={{ marginRight: "10px", padding: "5px" }}
              className="ctw-input"
              autoComplete="off"
              data-ctw-ino="4"
            />
            <span
              className="clear"
              style={{ cursor: "pointer", padding: "2px" }}
              onClick={() => {
                ECT.Handler.clear("1");
              }}
            >
              ❌
            </span>
            <div id="selected-element-4"></div>
          </div>
          <div className="ctw-window" data-ctw-ino="4"></div>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.rowHead}>
              <TableCell
                className={classes.tableHeading}
                colspan="7"
                rowspan="1"
              >
                Cause of Death
              </TableCell>
            </TableRow>
            <TableRow className={classes.rowHead}>
              <TableCell
                className={classes.tableSubHeading}
                colspan="7"
                rowspan="1"
              >
                Personal detail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                First name
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="GsIQgzKc1MJ"
                  onChange={(e) => handleChange(e)}
                  value={formData["GsIQgzKc1MJ"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                Middle name
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="wrtwOCZ76x6"
                  onChange={(e) => handleChange(e)}
                  value={formData["wrtwOCZ76x6"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                Last name
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="fDqh6LRtP7v"
                  onChange={(e) => handleChange(e)}
                  value={formData["fDqh6LRtP7v"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                Residence
              </TableCell>
              <TableCell component="th" scope="row" colspan="3" rowspan="1">
                <Input
                  className={classes.input}
                  id="C8Ed3dj3ZMo"
                  onChange={(e) => handleChange(e)}
                  value={formData["C8Ed3dj3ZMo"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                Occupation
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="sD7MDtsRiDG"
                  onChange={(e) => handleChange(e)}
                  value={formData["sD7MDtsRiDG"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                Date of birth
              </TableCell>
              <TableCell component="th" scope="row" colspan="3" rowspan="1">
                <TextField
                  id="XjrUFCJztS7"
                  label=""
                  type="date"
                  defaultValue=""
                  onChange={(e) => handleChange(e)}
                  value={formData["XjrUFCJztS7"]}
                  // defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                Sex
              </TableCell>
              <TableCell component="th" scope="row">
                <DropDown
                  placeHolder="Select Gender"
                  data={mfValues}
                  onChange={(value) => handleMFDropDownChange(value)}
                  selectedValue={formData["rMXEmkz6UHe"]}
                  className="singleSelect"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                Place of birth
              </TableCell>
              <TableCell component="th" scope="row" colspan="3" rowspan="1">
                <Input
                  className={classes.input}
                  id="FH88lfeD14k"
                  onChange={(e) => handleChange(e)}
                  value={formData["FH88lfeD14k"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                Date &amp; time of death
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="RAFGU0KjjBk"
                  label=""
                  type="datetime-local"
                  defaultValue=""
                  onChange={(e) => handleChange(e)}
                  value={formData["RAFGU0KjjBk"]}
                  // 2017-05-24T10:30
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                colspan="7"
                rowspan="1"
                className={classes?.labelBold}
              >
                Medical Data
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                &nbsp;
              </TableCell>
              <TableCell component="th" scope="row">
                &nbsp;
              </TableCell>
              <TableCell component="th" scope="row">
                Cause of Death
              </TableCell>
              <TableCell component="th" scope="row">
                ICD Code
              </TableCell>
              <TableCell component="th" scope="row">
                Cause of death free text
              </TableCell>
              <TableCell component="th" scope="row">
                Time interval type from onset to death
              </TableCell>
              <TableCell component="th" scope="row">
                <div>
                  <div>Time interval from onset to death</div>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Report disease or condition directly leading to death on line a
              </TableCell>
              <TableCell component="th" scope="row">
                a
              </TableCell>
              {/* ICD Field */}
              <TableCell component="th" scope="row">
                <div style={{ display: "flex" }}>
                  <Input
                    type="text"
                    className={classes.input}
                    id="VHe0VCpfsTO"
                    onChange={(e) => {
                      setValue1(e.target.value);
                    }}
                    value={VHe0VCpfsTO}
                  />
                  <span
                    className="clear"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      openModal(1);
                    }}
                  >
                    <img src="https://img.icons8.com/ios-filled/26/000000/search--v2.png" />
                  </span>
                </div>
              </TableCell>

              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="oIjRcRwdQ23"
                  onChange={(e) => {
                    setValue2(e.target.value);
                  }}
                  value={oIjRcRwdQ23}
                  disabled={VHe0VCpfsTO === ""}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="A9VpuZLdPKg"
                  onChange={(e) => handleChange(e)}
                  value={formData["A9VpuZLdPKg"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <DropDown
                  placeHolder="Select Time Interval ... "
                  data={timeIntervalValues1}
                  onChange={(value) => timeIntervalDropDownChange1(value)}
                  selectedValue={formData["frzbIQRjEfM"]}
                  className="singleSelect"
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="OD89RxKfUbH"
                  onKeyPress={(e) => {
                    if (
                      e.which === 46 ||
                      (e.which !== 37 &&
                        e.which !== 39 &&
                        e.which > 31 &&
                        (e.which < 48 || e.which > 57))
                    )
                      e.preventDefault();
                  }}
                  onChange={(e) => handleChange(e)}
                  value={formData["OD89RxKfUbH"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" colspan="1" rowspan="3">
                <div>
                  {`Report chain of events 'due to' (b to d) in order (if
                  applicable)`}
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                b
              </TableCell>
              <TableCell component="th" scope="row">
                {/* ICD Field */}
                <div style={{ display: "flex" }}>
                  <Input
                    type="text"
                    className={classes.input}
                    id="wCLuXx7mmLN"
                    onChange={(e) => {
                      setValue3(e.target.value);
                    }}
                    value={wCLuXx7mmLN}
                    disabled={VHe0VCpfsTO === "" || oIjRcRwdQ23 === ""}
                  />
                  <span
                    className="clear"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      openModal(2);
                    }}
                  >
                    <img src="https://img.icons8.com/ios-filled/26/000000/search--v2.png" />
                  </span>
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="imrk7rghkJP"
                  onChange={(e) => {
                    setValue4(e.target.value);
                  }}
                  value={imrk7rghkJP}
                  disabled={wCLuXx7mmLN === ""}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="FNQMR4nQLxY"
                  onChange={(e) => handleChange(e)}
                  value={formData["FNQMR4nQLxY"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <DropDown
                  placeHolder="Select Time Interval ... "
                  data={timeIntervalValues2}
                  onChange={(value) => timeIntervalDropDownChange2(value)}
                  selectedValue={formData["hPW8XCsagrj"]}
                  className="singleSelect"
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="dl7XFpm25R5"
                  onKeyPress={(e) => {
                    if (
                      e.which === 46 ||
                      (e.which !== 37 &&
                        e.which !== 39 &&
                        e.which > 31 &&
                        (e.which < 48 || e.which > 57))
                    )
                      e.preventDefault();
                  }}
                  onChange={(e) => handleChange(e)}
                  value={formData["dl7XFpm25R5"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                c
              </TableCell>
              <TableCell component="th" scope="row">
                {/* ICD Field */}
                <div style={{ display: "flex" }}>
                  <Input
                    type="text"
                    className={classes.input}
                    id="iutxAZDrht3"
                    onChange={(e) => {
                      setValue5(e.target.value);
                    }}
                    value={iutxAZDrht3}
                    disabled={
                      VHe0VCpfsTO === "" ||
                      oIjRcRwdQ23 === "" ||
                      wCLuXx7mmLN === "" ||
                      imrk7rghkJP === ""
                    }
                    iutxAZDrht3
                    fpffVuDDOHZ
                  />
                  <span
                    className="clear"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      openModal(3);
                    }}
                  >
                    <img src="https://img.icons8.com/ios-filled/26/000000/search--v2.png" />
                  </span>
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="fpffVuDDOHZ"
                  onChange={(e) => {
                    setValue6(e.target.value);
                  }}
                  value={fpffVuDDOHZ}
                  disabled={iutxAZDrht3 === ""}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="uZQlOieNOpv"
                  onChange={(e) => handleChange(e)}
                  value={formData["uZQlOieNOpv"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <DropDown
                  placeHolder="Select Time Interval ... "
                  data={timeIntervalValues3}
                  onChange={(value) => timeIntervalDropDownChange3(value)}
                  selectedValue={formData["HaxZrFkw3Ub"]}
                  className="singleSelect"
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="AhxsleVpIOj"
                  onKeyPress={(e) => {
                    if (
                      e.which === 46 ||
                      (e.which !== 37 &&
                        e.which !== 39 &&
                        e.which > 31 &&
                        (e.which < 48 || e.which > 57))
                    )
                      e.preventDefault();
                  }}
                  onChange={(e) => handleChange(e)}
                  value={formData["AhxsleVpIOj"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                d
              </TableCell>
              <TableCell component="th" scope="row">
                {/* ICD Field */}
                <div style={{ display: "flex" }}>
                  <Input
                    type="text"
                    className={classes.input}
                    id="FVWDju0Sh69"
                    onChange={(e) => {
                      setValue7(e.target.value);
                    }}
                    value={FVWDju0Sh69}
                    disabled={
                      VHe0VCpfsTO === "" ||
                      oIjRcRwdQ23 === "" ||
                      wCLuXx7mmLN === "" ||
                      imrk7rghkJP === "" ||
                      iutxAZDrht3 === "" ||
                      fpffVuDDOHZ === ""
                    }
                  />
                  <span
                    className="clear"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      openModal(4);
                    }}
                  >
                    <img src="https://img.icons8.com/ios-filled/26/000000/search--v2.png" />
                  </span>
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="Tih7qn0JLAd"
                  onChange={(e) => {
                    setValue8(e.target.value);
                  }}
                  value={Tih7qn0JLAd}
                  disabled={FVWDju0Sh69 === ""}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="Tugeo4ME0gD"
                  onChange={(e) => handleChange(e)}
                  value={formData["Tugeo4ME0gD"]}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <DropDown
                  placeHolder="Select Time Interval ... "
                  data={timeIntervalValues4}
                  onChange={(value) => timeIntervalDropDownChange4(value)}
                  selectedValue={formData["pWdIeszmC3H"]}
                  className="singleSelect"
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="kU1fjl339pE"
                  onKeyPress={(e) => {
                    if (
                      e.which === 46 ||
                      (e.which !== 37 &&
                        e.which !== 39 &&
                        e.which > 31 &&
                        (e.which < 48 || e.which > 57))
                    )
                      e.preventDefault();
                  }}
                  onChange={(e) => handleChange(e)}
                  value={formData["kU1fjl339pE"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                State underlying code
              </TableCell>
              <TableCell component="th" scope="row" colspan="3" rowspan="1">
                <DropDown
                  placeHolder="Select ICD Name ... "
                  data={icdName}
                  onChange={(value) => icdNameDropDown(value)}
                  selectedValue={
                    icdName.length > 0 ? formData["MxJp2CzIsYS"] : ""
                  }
                  className="stateUnderLyingCode"
                />
                {/* It shoud list above mentioned a,b,c,d in combo list */}
              </TableCell>
              <TableCell component="th" scope="row">
                ICD code or underlying code
              </TableCell>
              <TableCell component="th" scope="row">
                <DropDown
                  placeHolder="Select ICD code ... "
                  data={icdCode}
                  onChange={() => {}}
                  selectedValue={
                    icdCode.length > 0 ? formData["mYUCnp4QBsD"] : ""
                  }
                  disabled
                  className="singleSelect"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                Other significant conditions contributing to death (time
                intervals can be included in brackets after the condition)
              </TableCell>
              <TableCell component="th" scope="row" colspan="3" rowspan="1">
                <Input
                  className={classes.input}
                  id="MxJp2CzIsYS"
                  onChange={(e) => handleChange(e)}
                  value={formData["MxJp2CzIsYS"]}
                  // disabled
                />
              </TableCell>
              <TableCell component="th" scope="row">
                ICD code for the same
              </TableCell>
              <TableCell component="th" scope="row">
                <Input
                  className={classes.input}
                  id="mYUCnp4QBsD"
                  onChange={(e) => handleChange(e)}
                  value={formData["mYUCnp4QBsD"]}
                  // disabled
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                colspan="7"
                rowspan="1"
                className={classes?.labelBold}
              >
                Other Medical Data
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" colspan="5" rowspan="1">
                Was surgery performed within the last 4 weeks?
              </TableCell>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                {/* Surgery Drop Down */}
                <DropDown
                  placeHolder="Select option ... "
                  data={[{ name: "Yes" }, { name: "No" }]}
                  onChange={(value) => handleSurgeyDropDown(value)}
                  selectedValue={
                    formData["xhbB2g4vIuo"] === "true"
                      ? "Yes"
                      : formData["xhbB2g4vIuo"] === "" ||
                        formData["xhbB2g4vIuo"] === undefined
                      ? ""
                      : "No"
                  }
                  className=""
                />
              </TableCell>
            </TableRow>

            {formData["xhbB2g4vIuo"] === "true" ? (
              <>
                <TableRow>
                  <TableCell component="th" scope="row" colspan="5" rowspan="1">
                    If yes please specify date of surgery
                  </TableCell>
                  <TableCell component="th" scope="row" colspan="2" rowspan="1">
                    <TextField
                      id="Yi71TrJ0PsO"
                      label=""
                      type="date"
                      defaultValue=""
                      // 2017-05-24
                      onChange={(e) => handleChange(e)}
                      value={formData["Yi71TrJ0PsO"]}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" colspan="5" rowspan="1">
                    If yes please specify reason for surgery (disease or
                    condition)
                  </TableCell>
                  <TableCell component="th" scope="row" colspan="2" rowspan="1">
                    <Input
                      className={classes.input}
                      id="JYqNneTlAWU"
                      onChange={(e) => handleChange(e)}
                      value={formData["JYqNneTlAWU"]}
                    />
                  </TableCell>
                </TableRow>
              </>
            ) : null}

            <TableRow>
              <TableCell component="th" scope="row" colspan="5" rowspan="1">
                Was an autopsy requested?
              </TableCell>
              <TableCell component="th" scope="row" colspan="2" rowspan="1">
                <DropDown
                  placeHolder="Select option ... "
                  data={[{ name: "Yes" }, { name: "No" }]}
                  onChange={(value) => handleAutopsyDropDown(value)}
                  selectedValue={
                    formData["J9wAYdeEuQa"] === "true"
                      ? "Yes"
                      : formData["J9wAYdeEuQa"] === "" ||
                        formData["J9wAYdeEuQa"] === undefined
                      ? ""
                      : "No"
                  }
                  className=""
                />
              </TableCell>
            </TableRow>
            {formData["J9wAYdeEuQa"] === "true" ? (
              <TableRow>
                <TableCell component="th" scope="row" colspan="5" rowspan="1">
                  If yes were the findings used in the certification?
                </TableCell>
                <TableCell component="th" scope="row" colspan="2" rowspan="1">
                  <Input
                    className={classes.input}
                    id="gP7dnJZEejN"
                    onChange={(e) => handleChange(e)}
                    value={formData["gP7dnJZEejN"]}
                  />
                </TableCell>
              </TableRow>
            ) : null}

            <TableRow>
              <TableCell
                colspan="7"
                rowspan="1"
                component="th"
                className={classes?.labelBold}
              >
                Manner of death
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">Disease</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="T7BQ3GfqgaZ"
                  onChange={(e) => handleChange(e)}
                  checked={formData["T7BQ3GfqgaZ"] === "true"}
                />
              </TableCell>
              <TableCell component="th">&nbsp;</TableCell>
              <TableCell component="th">Assault</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="tdSBDSnjKzn"
                  onChange={(e) => handleChange(e)}
                  checked={formData["tdSBDSnjKzn"] === "true"}
                />
              </TableCell>
              <TableCell component="th">Could not be determined</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="UPFG0qwtggc"
                  onChange={(e) => handleChange(e)}
                  checked={formData["UPFG0qwtggc"] === "true"}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">Accident</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="BeDzrdGIYlw"
                  onChange={(e) => handleChange(e)}
                  checked={formData["BeDzrdGIYlw"] === "true"}
                />
              </TableCell>
              <TableCell component="th">&nbsp;</TableCell>
              <TableCell component="th">Lagal intervention</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="Ly3pBFmVbzw"
                  onChange={(e) => handleChange(e)}
                  checked={formData["Ly3pBFmVbzw"] === "true"}
                />
              </TableCell>
              <TableCell component="th">Pending investigation</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="EcEVPuPHuil"
                  onChange={(e) => handleChange(e)}
                  checked={formData["EcEVPuPHuil"] === "true"}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">Internal self-harm</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="IS5RcWC7cER"
                  onChange={(e) => handleChange(e)}
                  checked={formData["IS5RcWC7cER"] === "true"}
                />
              </TableCell>
              <TableCell component="th">&nbsp;</TableCell>
              <TableCell component="th">War</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="ZslJbCjKXf9"
                  onChange={(e) => handleChange(e)}
                  checked={formData["ZslJbCjKXf9"] === "true"}
                />
              </TableCell>
              <TableCell component="th">Unknown</TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="W4Lu4ycPQ7q"
                  onChange={(e) => handleChange(e)}
                  checked={formData["W4Lu4ycPQ7q"] === "true"}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" colspan="4" rowspan="1">
                If external cause or poisoning
              </TableCell>
              <TableCell component="th">
                <CheckBox
                  className={classes.input}
                  color="primary"
                  id="I83YjYy3yw9"
                  onChange={(e) => handleChange(e)}
                  checked={formData["I83YjYy3yw9"] === "true"}
                />
              </TableCell>
              <TableCell component="th">Date of injury</TableCell>
              <TableCell component="th">
                <TextField
                  id="kS3AJTCGXxC"
                  label=""
                  type="date"
                  defaultValue=""
                  onChange={(e) => handleChange(e)}
                  value={formData["kS3AJTCGXxC"]}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>

            {formData["I83YjYy3yw9"] === "true" ? (
              <>
                <TableRow>
                  <TableCell component="th" colspan="6" rowspan="1">
                    Please describe how external cause occurred (If poisoning
                    please specify poisoning agent)
                  </TableCell>
                  <TableCell component="th">
                    <Input
                      className={classes.input}
                      id="fztRaJ76up6"
                      onChange={(e) => handleChange(e)}
                      value={formData["fztRaJ76up6"]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" colspan="6" rowspan="1">
                    Place of occurance of external cause
                  </TableCell>
                  <TableCell component="th">
                    <Input
                      className={classes.input}
                      id="u18AxCtbATU"
                      onChange={(e) => handleChange(e)}
                      value={formData["u18AxCtbATU"]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" colspan="6" rowspan="1">
                    Please specify
                  </TableCell>
                  <TableCell component="th">
                    <Input
                      className={classes.input}
                      id="PMxyD0wfs6p"
                      onChange={(e) => handleChange(e)}
                      value={formData["PMxyD0wfs6p"]}
                    />
                  </TableCell>
                </TableRow>
              </>
            ) : null}

            <TableRow>
              <TableCell
                colspan="7"
                rowspan="1"
                component="th"
                className={classes?.labelBold}
              >
                Fetal or Infant death
              </TableCell>
            </TableRow>
            {formData["rMXEmkz6UHe"] === "Female" ? (
              <TableRow>
                <TableCell component="th" colspan="6" rowspan="1">
                  Multiple pregnancy
                </TableCell>
                <TableCell component="th">
                  <Input
                    className={classes.input}
                    id="cgxWlBA8c61"
                    onChange={(e) => handleChange(e)}
                    value={formData["cgxWlBA8c61"]}
                  />
                </TableCell>
              </TableRow>
            ) : null}

            <TableRow>
              <TableCell component="th" colspan="6" rowspan="1">
                Stillborn?
              </TableCell>
              <TableCell component="th">
                <Input
                  className={classes.input}
                  id="y5eNtqq1xFv"
                  onChange={(e) => handleChange(e)}
                  value={formData["y5eNtqq1xFv"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" colspan="4" rowspan="1">
                If death within 24 hrs specify the number of hours survived
              </TableCell>
              <TableCell component="th">
                <Input
                  className={classes.input}
                  id="K9NEBQBTb9J"
                  onChange={(e) => handleChange(e)}
                  value={formData["K9NEBQBTb9J"]}
                />
              </TableCell>
              <TableCell component="th">Birth weight (in grams)</TableCell>
              <TableCell component="th">
                <Input
                  className={classes.input}
                  id="fyTqQ4ElalY"
                  onChange={(e) => handleChange(e)}
                  value={formData["fyTqQ4ElalY"]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" colspan="4" rowspan="1">
                {formData["rMXEmkz6UHe"] === "Female"
                  ? "Number of completed weeks of pregnancy"
                  : ""}
              </TableCell>
              <TableCell component="th">
                {formData["rMXEmkz6UHe"] === "Female" ? (
                  <Input
                    className={classes.input}
                    id="BoRqskQuz2D"
                    onChange={(e) => handleChange(e)}
                    value={formData["BoRqskQuz2D"]}
                  />
                ) : null}
              </TableCell>
              <TableCell component="th">Age of mother (years)</TableCell>
              <TableCell component="th">
                <Input
                  className={classes.input}
                  id="Av6TTyk7IIg"
                  onKeyPress={(e) => {
                    if (
                      e.which === 46 ||
                      (e.which !== 37 &&
                        e.which !== 39 &&
                        e.which > 31 &&
                        (e.which < 48 || e.which > 57))
                    )
                      e.preventDefault();
                  }}
                  onChange={(e) => handleChange(e)}
                  value={formData["Av6TTyk7IIg"]}
                />
              </TableCell>
            </TableRow>

            {formData["rMXEmkz6UHe"] === "Female" ? (
              <>
                <TableRow>
                  <TableCell component="th" colspan="6" rowspan="1">
                    If the death was perinatal, please state conditions of
                    mother that affected the fetus and newborn
                  </TableCell>
                  <TableCell component="th">
                    <Input
                      className={classes.input}
                      id="IoQVPJZaCHZ"
                      onChange={(e) => handleChange(e)}
                      value={formData["IoQVPJZaCHZ"]}
                    />
                  </TableCell>
                </TableRow>
                {/* These are new 3 Drop Down */}
                {/* OptionSet Id -- j7SmbDDwjz1 */}
                <TableRow>
                  <TableCell component="th" colspan="4" rowspan="1">
                    For women, was the deceased pregnant?
                  </TableCell>
                  <TableCell component="th" colspan="3">
                    <DropDown
                      placeHolder="Select Options ... "
                      data={wasDeceasedWomanValues}
                      onChange={(value) =>
                        wasDeceasedWomanDropDownChange(value)
                      }
                      selectedValue={formData["R7iHsoO0RpH"]}
                      className="singleSelect"
                    />
                  </TableCell>
                </TableRow>
                {/* OptionSet Id -- bAXmGv0sAlZ */}
                {formData["R7iHsoO0RpH"] === "Yes" ? (
                  <>
                    <TableRow>
                      <TableCell component="th" colspan="4" rowspan="1">
                        Deceased pregnant
                      </TableCell>
                      <TableCell component="th" colspan="3">
                        <DropDown
                          placeHolder="Select Options ... "
                          data={deceasedPregnantValues}
                          onChange={(value) =>
                            deceasedPregnantDropDownChange(value)
                          }
                          selectedValue={formData["WRVOUWqEtMe"]}
                          className="singleSelect"
                        />
                      </TableCell>
                    </TableRow>
                    {/* OptionSet Id -- j7SmbDDwjz1 */}
                    <TableRow>
                      <TableCell component="th" colspan="4" rowspan="1">
                        Did the pregnancy contribute to the death?
                      </TableCell>
                      <TableCell component="th" colspan="3">
                        <DropDown
                          placeHolder="Select Options..."
                          data={pregnancyContributeToDeathValues}
                          onChange={(value) =>
                            pregnancyContributeToDeathDropDownChange(value)
                          }
                          selectedValue={formData["EmUH7hTE6Mt"]}
                          className="singleSelect"
                        />
                      </TableCell>
                    </TableRow>
                  </>
                ) : null}
              </>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

TableComponent.propsTypes = {};

export default TableComponent;
