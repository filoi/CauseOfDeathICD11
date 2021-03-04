import React, { useEffect, useState } from "react";
import { init, getInstance } from "d2/lib/d2";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { DataProvider } from "@dhis2/app-runtime";
import { HeaderBar } from "@dhis2/ui";

import OrganisationUnit from "./components/OrganisationUnit/OrganisationUnit";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import LineListTable from "./components/LineListTable/LineListTable";
import appTheme from "./common/app.theme";
import "./App.css";

function App() {
  const [rootData, setRootData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedOrgnisationUnits, setSelectedOrgnisationUnits] = useState([]);

  const [programOrganisationUnits, setProgramOrganisationUnits] = useState([]);

  const [enableCreateEventBtn, setEnableCreateEventBtn] = useState(true);

  const [formData, setFormData] = useState({});
  const [VHe0VCpfsTO, setValue1] = useState("");
  const [oIjRcRwdQ23, setValue2] = useState("");
  const [wCLuXx7mmLN, setValue3] = useState("");
  const [imrk7rghkJP, setValue4] = useState("");
  const [iutxAZDrht3, setValue5] = useState("");
  const [fpffVuDDOHZ, setValue6] = useState("");
  const [FVWDju0Sh69, setValue7] = useState("");
  const [Tih7qn0JLAd, setValue8] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [trackedEntityInstance, setTrackedEntityInstance] = useState("");
  const [enrollmentID, setEnrollmentId] = useState("");
  const [eventID, setEventID] = useState("");
  console.log("Form Data", formData);

  useEffect(() => {
    getProgramData();
  }, []);

  useEffect(() => {
    if (
      selectedOrgnisationUnits.length !== 0 &&
      programOrganisationUnits.length !== 0
    ) {
      setEnableCreateEventBtn(true);
      programOrganisationUnits.map((org) => {
        if (org.id === selectedOrgnisationUnits[0].id) {
          setEnableCreateEventBtn(false);
        }
      });
    }
  }, [selectedOrgnisationUnits]);

  const getProgramData = async () => {
    try {
      const response = await axios.get("../../programs/SvqPa5vUY7e.json");
      setProgramOrganisationUnits(response?.data?.organisationUnits);
    } catch (error) {
      console.error(error);
    }
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  async function postData() {
    console.log( "---::: Form Data:: CREATE ::: ---", formData);
    var tei = {
      trackedEntityType: "MCPQUTHX1Ze",
      orgUnit: selectedOrgnisationUnits[0].id,
      attributes: [
        //Atributes
        { attribute: "GsIQgzKc1MJ", value: formData["GsIQgzKc1MJ"] },
        { attribute: "wrtwOCZ76x6", value: formData["wrtwOCZ76x6"] },
        { attribute: "fDqh6LRtP7v", value: formData["fDqh6LRtP7v"] },
        { attribute: "C8Ed3dj3ZMo", value: formData["C8Ed3dj3ZMo"] },
        { attribute: "sD7MDtsRiDG", value: formData["sD7MDtsRiDG"] },
        { attribute: "XjrUFCJztS7", value: formData["XjrUFCJztS7"] },
        { attribute: "rMXEmkz6UHe", value: formData["rMXEmkz6UHe"] },

        { attribute: "RAFGU0KjjBk", value: formData["RAFGU0KjjBk"] },
        //Atributes
      ],
      enrollments: [
        {
          orgUnit: selectedOrgnisationUnits[0].id,
          program: "l7yNHuZs4io",
          enrollmentDate: formatDate(new Date()),
          incidentDate: formatDate(new Date()),
          events: [
            {
              program: "l7yNHuZs4io",
              orgUnit: selectedOrgnisationUnits[0].id,
              eventDate: formatDate(new Date()),
              status: "COMPLETED",
              storedBy: "neeraj",
              programStage: "LvHGKEqTeQL",
              dataValues: [
                //Program satge
                { dataElement: "FH88lfeD14k", value: formData["FH88lfeD14k"] }, // Place of Birth
                //Medical Data
                { dataElement: "VHe0VCpfsTO", value: VHe0VCpfsTO },
                { dataElement: "oIjRcRwdQ23", value: oIjRcRwdQ23 },
                {
                  dataElement: "A9VpuZLdPKg",
                  value: formData["A9VpuZLdPKg"],
                },
                {
                  dataElement: "frzbIQRjEfM",
                  value: formData["frzbIQRjEfM"],
                },
                {
                  dataElement: "OD89RxKfUbH",
                  value: formData["OD89RxKfUbH"],
                },
                { dataElement: "wCLuXx7mmLN", value: wCLuXx7mmLN },
                { dataElement: "imrk7rghkJP", value: imrk7rghkJP },
                {
                  dataElement: "FNQMR4nQLxY",
                  value: formData["FNQMR4nQLxY"],
                },
                {
                  dataElement: "hPW8XCsagrj",
                  value: formData["hPW8XCsagrj"],
                },
                {
                  dataElement: "dl7XFpm25R5",
                  value: formData["dl7XFpm25R5"],
                },
                { dataElement: "iutxAZDrht3", value: iutxAZDrht3 },
                { dataElement: "fpffVuDDOHZ", value: fpffVuDDOHZ },
                {
                  dataElement: "uZQlOieNOpv",
                  value: formData["uZQlOieNOpv"],
                },
                {
                  dataElement: "HaxZrFkw3Ub",
                  value: formData["HaxZrFkw3Ub"],
                },
                {
                  dataElement: "AhxsleVpIOj",
                  value: formData["AhxsleVpIOj"],
                },
                { dataElement: "FVWDju0Sh69", value: FVWDju0Sh69 },
                { dataElement: "Tih7qn0JLAd", value: Tih7qn0JLAd },
                {
                  dataElement: "Tugeo4ME0gD",
                  value: formData["Tugeo4ME0gD"],
                },
                {
                  dataElement: "pWdIeszmC3H",
                  value: formData["pWdIeszmC3H"],
                },
                {
                  dataElement: "kU1fjl339pE",
                  value: formData["kU1fjl339pE"],
                },
                {
                  dataElement: "MxJp2CzIsYS",
                  value: formData["MxJp2CzIsYS"],
                },
                {
                  dataElement: "mYUCnp4QBsD",
                  value: formData["mYUCnp4QBsD"],
                },
                //Medical Data

                // Other medical data
                {
                  dataElement: "xhbB2g4vIuo",
                  value: formData["xhbB2g4vIuo"],
                },
                {
                  dataElement: "Yi71TrJ0PsO",
                  value: formData["Yi71TrJ0PsO"],
                },
                {
                  dataElement: "JYqNneTlAWU",
                  value: formData["JYqNneTlAWU"],
                },
                {
                  dataElement: "J9wAYdeEuQa",
                  value: formData["J9wAYdeEuQa"],
                },
                {
                  dataElement: "gP7dnJZEejN",
                  value: formData["gP7dnJZEejN"],
                },
                // Other medical data

                // Manner of death
                {
                  dataElement: "T7BQ3GfqgaZ",
                  value: formData["T7BQ3GfqgaZ"],
                },
                {
                  dataElement: "BeDzrdGIYlw",
                  value: formData["BeDzrdGIYlw"],
                },
                {
                  dataElement: "IS5RcWC7cER",
                  value: formData["IS5RcWC7cER"],
                },

                {
                  dataElement: "tdSBDSnjKzn",
                  value: formData["tdSBDSnjKzn"],
                },
                {
                  dataElement: "Ly3pBFmVbzw",
                  value: formData["Ly3pBFmVbzw"],
                },
                {
                  dataElement: "ZslJbCjKXf9",
                  value: formData["ZslJbCjKXf9"],
                },
                {
                  dataElement: "I83YjYy3yw9",
                  value: formData["I83YjYy3yw9"],
                },

                {
                  dataElement: "UPFG0qwtggc",
                  value: formData["UPFG0qwtggc"],
                },
                {
                  dataElement: "EcEVPuPHuil",
                  value: formData["EcEVPuPHuil"],
                },
                {
                  dataElement: "W4Lu4ycPQ7q",
                  value: formData["W4Lu4ycPQ7q"],
                },
                {
                  dataElement: "kS3AJTCGXxC",
                  value: formData["kS3AJTCGXxC"],
                },

                {
                  dataElement: "fztRaJ76up6",
                  value: formData["fztRaJ76up6"],
                },
                {
                  dataElement: "u18AxCtbATU",
                  value: formData["u18AxCtbATU"],
                },
                {
                  dataElement: "PMxyD0wfs6p",
                  value: formData["PMxyD0wfs6p"],
                },
                //Manner of death

                //Fetal or Infant death
                {
                  dataElement: "cgxWlBA8c61",
                  value: formData["cgxWlBA8c61"],
                },
                {
                  dataElement: "y5eNtqq1xFv",
                  value: formData["y5eNtqq1xFv"],
                },

                {
                  dataElement: "K9NEBQBTb9J",
                  value: formData["K9NEBQBTb9J"],
                },
                {
                  dataElement: "BoRqskQuz2D",
                  value: formData["BoRqskQuz2D"],
                },

                {
                  dataElement: "fyTqQ4ElalY",
                  value: formData["fyTqQ4ElalY"],
                },
                {
                  dataElement: "Av6TTyk7IIg",
                  value: formData["Av6TTyk7IIg"],
                },
                {
                  dataElement: "IoQVPJZaCHZ",
                  value: formData["IoQVPJZaCHZ"],
                },
                // Fetal or Infant death

                //  Deceased Pregnant
                {
                  dataElement: "R7iHsoO0RpH",
                  value: formData["R7iHsoO0RpH"],
                },
                {
                  dataElement: "WRVOUWqEtMe",
                  value: formData["WRVOUWqEtMe"],
                },
                {
                  dataElement: "EmUH7hTE6Mt",
                  value: formData["EmUH7hTE6Mt"],
                },
                //Deceased Pregnant

                //Program satge
              ],
            },
          ],
        },
      ],
    };

    try {
      const response = await axios({
        method: "post",
        url: `../../trackedEntityInstances`,
        data: tei,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.httpStatusCode === 200) {
        console.log(response.data.message);
        setSuccessMessage(response.data.message);
        openModal();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const updateData = async () => {
    console.log(
      "---::: Form Data:: UPDATE ::: ---",
      formData
    );

    var updateObj = {
      trackedEntityInstance: trackedEntityInstance,
      trackedEntityType: "MCPQUTHX1Ze",
      orgUnit: selectedOrgnisationUnits[0].id,
      attributes: [
        //Atributes
        { attribute: "GsIQgzKc1MJ", value: formData["GsIQgzKc1MJ"] },
        { attribute: "wrtwOCZ76x6", value: formData["wrtwOCZ76x6"] },
        { attribute: "fDqh6LRtP7v", value: formData["fDqh6LRtP7v"] },
        { attribute: "C8Ed3dj3ZMo", value: formData["C8Ed3dj3ZMo"] },
        { attribute: "sD7MDtsRiDG", value: formData["sD7MDtsRiDG"] },
        { attribute: "XjrUFCJztS7", value: formData["XjrUFCJztS7"] },
        { attribute: "rMXEmkz6UHe", value: formData["rMXEmkz6UHe"] },

        { attribute: "RAFGU0KjjBk", value: formData["RAFGU0KjjBk"] },
        //Atributes
      ],
      enrollments: [
        {
          orgUnit: selectedOrgnisationUnits[0].id,
          program: "l7yNHuZs4io",
          enrollment: enrollmentID,

          trackedEntityInstance: trackedEntityInstance,
          status: "ACTIVE",
          events: [
            {
              program: "l7yNHuZs4io",
              orgUnit: selectedOrgnisationUnits[0].id,
              eventDate: formatDate(new Date()),
              trackedEntityInstance: trackedEntityInstance,
              enrollmentStatus: "ACTIVE",
              enrollment: enrollmentID,
              event: eventID,
              status: "ACTIVE",
              storedBy: "neeraj",
              programStage: "LvHGKEqTeQL",
              dataValues: [
                //Program satge
                { dataElement: "FH88lfeD14k", value: formData["FH88lfeD14k"] }, // Place of Birth
                //Medical Data
                { dataElement: "VHe0VCpfsTO", value: VHe0VCpfsTO },
                { dataElement: "oIjRcRwdQ23", value: oIjRcRwdQ23 },
                {
                  dataElement: "A9VpuZLdPKg",
                  value: formData["A9VpuZLdPKg"],
                },
                {
                  dataElement: "frzbIQRjEfM",
                  value: formData["frzbIQRjEfM"],
                },
                {
                  dataElement: "OD89RxKfUbH",
                  value: formData["OD89RxKfUbH"],
                },
                { dataElement: "wCLuXx7mmLN", value: wCLuXx7mmLN },
                { dataElement: "imrk7rghkJP", value: imrk7rghkJP },
                {
                  dataElement: "FNQMR4nQLxY",
                  value: formData["FNQMR4nQLxY"],
                },
                {
                  dataElement: "hPW8XCsagrj",
                  value: formData["hPW8XCsagrj"],
                },
                {
                  dataElement: "dl7XFpm25R5",
                  value: formData["dl7XFpm25R5"],
                },
                { dataElement: "iutxAZDrht3", value: iutxAZDrht3 },
                { dataElement: "fpffVuDDOHZ", value: fpffVuDDOHZ },
                {
                  dataElement: "uZQlOieNOpv",
                  value: formData["uZQlOieNOpv"],
                },
                {
                  dataElement: "HaxZrFkw3Ub",
                  value: formData["HaxZrFkw3Ub"],
                },
                {
                  dataElement: "AhxsleVpIOj",
                  value: formData["AhxsleVpIOj"],
                },
                { dataElement: "FVWDju0Sh69", value: FVWDju0Sh69 },
                { dataElement: "Tih7qn0JLAd", value: Tih7qn0JLAd },
                {
                  dataElement: "Tugeo4ME0gD",
                  value: formData["Tugeo4ME0gD"],
                },
                {
                  dataElement: "pWdIeszmC3H",
                  value: formData["pWdIeszmC3H"],
                },
                {
                  dataElement: "kU1fjl339pE",
                  value: formData["kU1fjl339pE"],
                },
                {
                  dataElement: "MxJp2CzIsYS",
                  value: formData["MxJp2CzIsYS"],
                },
                {
                  dataElement: "mYUCnp4QBsD",
                  value: formData["mYUCnp4QBsD"],
                },
                //Medical Data

                // Other medical data
                {
                  dataElement: "xhbB2g4vIuo",
                  value: formData["xhbB2g4vIuo"],
                },
                {
                  dataElement: "Yi71TrJ0PsO",
                  value: formData["Yi71TrJ0PsO"],
                },
                {
                  dataElement: "JYqNneTlAWU",
                  value: formData["JYqNneTlAWU"],
                },
                {
                  dataElement: "J9wAYdeEuQa",
                  value: formData["J9wAYdeEuQa"],
                },
                {
                  dataElement: "gP7dnJZEejN",
                  value: formData["gP7dnJZEejN"],
                },
                // Other medical data

                // Manner of death
                {
                  dataElement: "T7BQ3GfqgaZ",
                  value: formData["T7BQ3GfqgaZ"],
                },
                {
                  dataElement: "BeDzrdGIYlw",
                  value: formData["BeDzrdGIYlw"],
                },
                {
                  dataElement: "IS5RcWC7cER",
                  value: formData["IS5RcWC7cER"],
                },

                {
                  dataElement: "tdSBDSnjKzn",
                  value: formData["tdSBDSnjKzn"],
                },
                {
                  dataElement: "Ly3pBFmVbzw",
                  value: formData["Ly3pBFmVbzw"],
                },
                {
                  dataElement: "ZslJbCjKXf9",
                  value: formData["ZslJbCjKXf9"],
                },
                {
                  dataElement: "I83YjYy3yw9",
                  value: formData["I83YjYy3yw9"],
                },

                {
                  dataElement: "UPFG0qwtggc",
                  value: formData["UPFG0qwtggc"],
                },
                {
                  dataElement: "EcEVPuPHuil",
                  value: formData["EcEVPuPHuil"],
                },
                {
                  dataElement: "W4Lu4ycPQ7q",
                  value: formData["W4Lu4ycPQ7q"],
                },
                {
                  dataElement: "kS3AJTCGXxC",
                  value: formData["kS3AJTCGXxC"],
                },

                {
                  dataElement: "fztRaJ76up6",
                  value: formData["fztRaJ76up6"],
                },
                {
                  dataElement: "u18AxCtbATU",
                  value: formData["u18AxCtbATU"],
                },
                {
                  dataElement: "PMxyD0wfs6p",
                  value: formData["PMxyD0wfs6p"],
                },
                //Manner of death

                //Fetal or Infant death
                {
                  dataElement: "cgxWlBA8c61",
                  value: formData["cgxWlBA8c61"],
                },
                {
                  dataElement: "y5eNtqq1xFv",
                  value: formData["y5eNtqq1xFv"],
                },

                {
                  dataElement: "K9NEBQBTb9J",
                  value: formData["K9NEBQBTb9J"],
                },
                {
                  dataElement: "BoRqskQuz2D",
                  value: formData["BoRqskQuz2D"],
                },

                {
                  dataElement: "fyTqQ4ElalY",
                  value: formData["fyTqQ4ElalY"],
                },
                {
                  dataElement: "Av6TTyk7IIg",
                  value: formData["Av6TTyk7IIg"],
                },
                {
                  dataElement: "IoQVPJZaCHZ",
                  value: formData["IoQVPJZaCHZ"],
                },
                // Fetal or Infant death

                //  Deceased Pregnant
                {
                  dataElement: "R7iHsoO0RpH",
                  value: formData["R7iHsoO0RpH"],
                },
                {
                  dataElement: "WRVOUWqEtMe",
                  value: formData["WRVOUWqEtMe"],
                },
                {
                  dataElement: "EmUH7hTE6Mt",
                  value: formData["EmUH7hTE6Mt"],
                },
                //Deceased Pregnant

                //Program satge
              ],
            },
          ],
        },
      ],
    };

    try {
      const response = await axios.put(
        `../../trackedEntityInstances/${trackedEntityInstance}`,
        updateObj
      );
      if (response.data.httpStatusCode === 200) {
        console.log(response.data.message);
        setSuccessMessage(response.data.message);
        openModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    window.location.reload();
    setSelectedOrgnisationUnits(selectedOrgnisationUnits);
    setFormData({});
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
    setValue6("");
    setValue7("");
    setValue8("");
  };

  const openModal = () => {
    var modal = document.getElementById("successModal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    setSuccessMessage("");
    var modal = document.getElementById("successModal");
    modal.style.display = "none";
    closeEvent();
    handleCancel();
  };

  const createEvent = () => {
    var tableSection = document.getElementById("tableSection");
    tableSection.style.display = "block";

    var lineListSection = document.getElementById("lineList");
    lineListSection.style.display = "none";
  };

  const closeEvent = () => {
    var modal = document.getElementById("tableSection");
    modal.style.display = "none";
    var lineListSection = document.getElementById("lineList");
    lineListSection.style.display = "block";
  };

  // Edit Part
  const lineItemEnrollmentValue = (enrollments, id) => {
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

  const lineItemAttributeValue = (attributes, id) => {
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

  const handleEnrollmentEvent = (teiObj) => {
    if (teiObj.enrollments.length > 0 && teiObj.enrollments !== undefined) {
      setEnrollmentId(teiObj.enrollments[0].enrollment);
      if (
        teiObj.enrollments[0].events.length > 0 &&
        teiObj.enrollments[0].events !== undefined
      ) {
        setEventID(teiObj.enrollments[0].events[0].event);
      }
    }
  };

  const handleEditTEI = async (tei, teiObj, edit) => {
    setEditMode(edit === "edit");
    setTrackedEntityInstance(tei);
    handleEnrollmentEvent(teiObj);

    console.log("------_TEI--------", tei, teiObj);
    const objForm = {
      //Atributes
      GsIQgzKc1MJ: lineItemAttributeValue(teiObj.attributes, "GsIQgzKc1MJ"),
      wrtwOCZ76x6: lineItemAttributeValue(teiObj.attributes, "wrtwOCZ76x6"),
      fDqh6LRtP7v: lineItemAttributeValue(teiObj.attributes, "fDqh6LRtP7v"),
      C8Ed3dj3ZMo: lineItemAttributeValue(teiObj.attributes, "C8Ed3dj3ZMo"),
      sD7MDtsRiDG: lineItemAttributeValue(teiObj.attributes, "sD7MDtsRiDG"),
      XjrUFCJztS7: lineItemAttributeValue(teiObj.attributes, "XjrUFCJztS7"),
      rMXEmkz6UHe: lineItemAttributeValue(teiObj.attributes, "rMXEmkz6UHe"),

      RAFGU0KjjBk: lineItemAttributeValue(teiObj.attributes, "RAFGU0KjjBk"),
      //Atributes

      //Program satge
      FH88lfeD14k: lineItemEnrollmentValue(teiObj.enrollments, "FH88lfeD14k"), // Place of Birth
      //Medical Data

      A9VpuZLdPKg: lineItemEnrollmentValue(teiObj.enrollments, "A9VpuZLdPKg"),

      frzbIQRjEfM: lineItemEnrollmentValue(teiObj.enrollments, "frzbIQRjEfM"),

      OD89RxKfUbH: lineItemEnrollmentValue(teiObj.enrollments, "OD89RxKfUbH"),

      FNQMR4nQLxY: lineItemEnrollmentValue(teiObj.enrollments, "FNQMR4nQLxY"),

      hPW8XCsagrj: lineItemEnrollmentValue(teiObj.enrollments, "hPW8XCsagrj"),

      dl7XFpm25R5: lineItemEnrollmentValue(teiObj.enrollments, "dl7XFpm25R5"),

      uZQlOieNOpv: lineItemEnrollmentValue(teiObj.enrollments, "uZQlOieNOpv"),

      HaxZrFkw3Ub: lineItemEnrollmentValue(teiObj.enrollments, "HaxZrFkw3Ub"),

      AhxsleVpIOj: lineItemEnrollmentValue(teiObj.enrollments, "AhxsleVpIOj"),

      Tugeo4ME0gD: lineItemEnrollmentValue(teiObj.enrollments, "Tugeo4ME0gD"),

      pWdIeszmC3H: lineItemEnrollmentValue(teiObj.enrollments, "pWdIeszmC3H"),

      kU1fjl339pE: lineItemEnrollmentValue(teiObj.enrollments, "kU1fjl339pE"),

      MxJp2CzIsYS: lineItemEnrollmentValue(teiObj.enrollments, "MxJp2CzIsYS"),

      mYUCnp4QBsD: lineItemEnrollmentValue(teiObj.enrollments, "mYUCnp4QBsD"),

      //Medical Data

      // Other medical data

      xhbB2g4vIuo: lineItemEnrollmentValue(teiObj.enrollments, "xhbB2g4vIuo"),

      Yi71TrJ0PsO: lineItemEnrollmentValue(teiObj.enrollments, "Yi71TrJ0PsO"),

      JYqNneTlAWU: lineItemEnrollmentValue(teiObj.enrollments, "JYqNneTlAWU"),

      J9wAYdeEuQa: lineItemEnrollmentValue(teiObj.enrollments, "J9wAYdeEuQa"),

      gP7dnJZEejN: lineItemEnrollmentValue(teiObj.enrollments, "gP7dnJZEejN"),

      // Other medical data

      // Manner of death

      T7BQ3GfqgaZ: lineItemEnrollmentValue(teiObj.enrollments, "T7BQ3GfqgaZ"),

      BeDzrdGIYlw: lineItemEnrollmentValue(teiObj.enrollments, "BeDzrdGIYlw"),

      IS5RcWC7cER: lineItemEnrollmentValue(teiObj.enrollments, "IS5RcWC7cER"),

      tdSBDSnjKzn: lineItemEnrollmentValue(teiObj.enrollments, "tdSBDSnjKzn"),

      Ly3pBFmVbzw: lineItemEnrollmentValue(teiObj.enrollments, "Ly3pBFmVbzw"),

      ZslJbCjKXf9: lineItemEnrollmentValue(teiObj.enrollments, "ZslJbCjKXf9"),

      I83YjYy3yw9: lineItemEnrollmentValue(teiObj.enrollments, "I83YjYy3yw9"),

      UPFG0qwtggc: lineItemEnrollmentValue(teiObj.enrollments, "UPFG0qwtggc"),

      EcEVPuPHuil: lineItemEnrollmentValue(teiObj.enrollments, "EcEVPuPHuil"),

      W4Lu4ycPQ7q: lineItemEnrollmentValue(teiObj.enrollments, "W4Lu4ycPQ7q"),

      kS3AJTCGXxC: lineItemEnrollmentValue(teiObj.enrollments, "kS3AJTCGXxC"),

      fztRaJ76up6: lineItemEnrollmentValue(teiObj.enrollments, "fztRaJ76up6"),

      u18AxCtbATU: lineItemEnrollmentValue(teiObj.enrollments, "u18AxCtbATU"),

      PMxyD0wfs6p: lineItemEnrollmentValue(teiObj.enrollments, "PMxyD0wfs6p"),

      //Manner of death

      //Fetal or Infant death

      cgxWlBA8c61: lineItemEnrollmentValue(teiObj.enrollments, "cgxWlBA8c61"),

      y5eNtqq1xFv: lineItemEnrollmentValue(teiObj.enrollments, "y5eNtqq1xFv"),

      K9NEBQBTb9J: lineItemEnrollmentValue(teiObj.enrollments, "K9NEBQBTb9J"),

      BoRqskQuz2D: lineItemEnrollmentValue(teiObj.enrollments, "BoRqskQuz2D"),

      fyTqQ4ElalY: lineItemEnrollmentValue(teiObj.enrollments, "fyTqQ4ElalY"),

      Av6TTyk7IIg: lineItemEnrollmentValue(teiObj.enrollments, "Av6TTyk7IIg"),

      IoQVPJZaCHZ: lineItemEnrollmentValue(teiObj.enrollments, "VHe0VCpfsTO"),
      // Fetal or Infant death}

      //  Deceased Pregnant
      R7iHsoO0RpH: lineItemEnrollmentValue(teiObj.enrollments, "R7iHsoO0RpH"),

      WRVOUWqEtMe: lineItemEnrollmentValue(teiObj.enrollments, "WRVOUWqEtMe"),

      EmUH7hTE6Mt: lineItemEnrollmentValue(teiObj.enrollments, "EmUH7hTE6Mt"),

      //Deceased Pregnant

      //Program satge
    };

    setValue1(lineItemEnrollmentValue(teiObj.enrollments, "VHe0VCpfsTO"));
    setValue2(lineItemEnrollmentValue(teiObj.enrollments, "oIjRcRwdQ23"));
    setValue3(lineItemEnrollmentValue(teiObj.enrollments, "wCLuXx7mmLN"));
    setValue4(lineItemEnrollmentValue(teiObj.enrollments, "imrk7rghkJP"));
    setValue5(lineItemEnrollmentValue(teiObj.enrollments, "iutxAZDrht3"));
    setValue6(lineItemEnrollmentValue(teiObj.enrollments, "fpffVuDDOHZ"));
    setValue7(lineItemEnrollmentValue(teiObj.enrollments, "FVWDju0Sh69"));
    setValue8(lineItemEnrollmentValue(teiObj.enrollments, "Tih7qn0JLAd"));
    setTimeout(function () {
      setFormData(objForm);
      createEvent();
    }, 1000);
  };

  //Edit Part

  // Intial API Calls for DataSets, DataElemet Groups
  // and All dataSets --[all Data elements of Data set]
  // & [all assigned orgUnits]
  // & Loading OrgUNit Tree Data
  useEffect(() => {
    init({ baseUrl: "../../" }).then((d2) => {
      intState(d2);
    });
  }, []);

  // Function for loading data from d2 Library
  async function intState() {
    const [userOrganisationUnits] = await Promise.all([
      getCurrentUserOrganisationUnits(true),
    ]);

    const loadedState = {
      roots: userOrganisationUnits.toArray(),
    };

    setRootData(userOrganisationUnits.toArray());
  }

  async function getCurrentUserOrganisationUnits(disableCache = false) {
    if (
      !disableCache &&
      getCurrentUserOrganisationUnits.currentUserOrganisationUnits
    ) {
      return getCurrentUserOrganisationUnits.currentUserOrganisationUnits;
    }

    const d2 = await getInstance();
    const organisationUnitsCollection = await d2.currentUser.getOrganisationUnits(
      {
        fields:
          ":all,displayName,path,publicAccess,access,children[id,displayName,path,children::isNotEmpty,publicAccess,access]",
        paging: false,
      }
    );

    if (
      d2.currentUser.authorities.has("ALL") &&
      !organisationUnitsCollection.size
    ) {
      const rootLevelOrgUnits = await d2.models.organisationUnits.list({
        level: 1,
        paging: false,
        fields: [
          "id,displayName,path,publicAccess,access,lastUpdated",
          "children[id,displayName,publicAccess,access,path,children::isNotEmpty]",
        ].join(","),
      });

      getCurrentUserOrganisationUnits.currentUserOrganisationUnits = rootLevelOrgUnits;

      if (rootLevelOrgUnits.size === 0) {
        snackActions.show({
          message: "no_org_units_add_one_to_get_started",
          translate: true,
        });
      }

      return rootLevelOrgUnits;
    }

    getCurrentUserOrganisationUnits.currentUserOrganisationUnits = organisationUnitsCollection;

    return organisationUnitsCollection;
  }

  return (
    <MuiThemeProvider muiTheme={appTheme}>
      <DataProvider baseUrl={"../../../"} apiVersion={33}>
        <HeaderBar appName="Cause of Death - ICD11" />
      </DataProvider>

      <div id="successModal" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              closeModal();
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
            Success
          </div>
          <div
            style={{
              padding: "20px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main-left">
          <Paper
            style={{
              flex: 1,
              marginRight: "2rem",
              padding: "1rem",
              boxShadow: "10px 11px 41px -9px rgba(0,0,0,0.75)",
              overflow: "auto",
            }}
          >
            <div className="main-heading">Select OrganisationUnit </div>
            {rootData !== null ? (
              <div className="organisationUnit-tree">
                <OrganisationUnit
                  roots={rootData}
                  forceReloadChildren
                  selected={selectedOrgnisationUnits}
                  onChange={setSelectedOrgnisationUnits}
                />
              </div>
            ) : null}
          </Paper>
        </div>
        <div className="main-right">
          <Button
            text="Create Event"
            onClick={() => {
              createEvent();
            }}
            className="create-event-btn"
            disabled={enableCreateEventBtn}
          />
        </div>
      </div>

      <div id="lineList" className="main">
        <LineListTable
          ouID={
            selectedOrgnisationUnits.length > 0
              ? selectedOrgnisationUnits[0].id
              : ""
          }
          editSelectedTEI={(tei, teiObj, edit) => {
            handleEditTEI(tei, teiObj, edit);
          }}
        />
      </div>

      <div id="tableSection" className="main">
        <Table
          setFormData={setFormData}
          formData={formData}
          VHe0VCpfsTO={VHe0VCpfsTO}
          setValue1={setValue1}
          oIjRcRwdQ23={oIjRcRwdQ23}
          setValue2={setValue2}
          wCLuXx7mmLN={wCLuXx7mmLN}
          setValue3={setValue3}
          imrk7rghkJP={imrk7rghkJP}
          setValue4={setValue4}
          iutxAZDrht3={iutxAZDrht3}
          setValue5={setValue5}
          fpffVuDDOHZ={fpffVuDDOHZ}
          setValue6={setValue6}
          FVWDju0Sh69={FVWDju0Sh69}
          setValue7={setValue7}
          Tih7qn0JLAd={Tih7qn0JLAd}
          setValue8={setValue8}
          editMode={editMode}
        />
        <div className="button-Section">
          {editMode ? (
            <Button
              text="Update"
              onClick={() => {
                updateData();
              }}
            />
          ) : (
            <Button
              text="Submit"
              onClick={() => {
                postData();
              }}
            />
          )}
          <Button
            text="Cancel"
            onClick={() => {
              handleCancel();
            }}
          />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
