import { Button, Grid, Paper } from "@mui/material";
// import classes from "./AddSideBar.module.css";
// import classes from "./SideBar.module.css";
import "./SideBar.css";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";

const SideBar = () => {
  const [filter, setFilter] = useState(true);
  const { fetchByParams } = useProducts();
  return (
    <>
      {filter ? (
        <Grid className="sidebar">
          <Paper
            className="sidePaper"
            sx={{
              height: "100%",
              width: "100%",
            }}
          >
            <Button
              className="sideBtn"
              value="Трехмесячный"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="трехмесячные"
              sx={{
                display: "block",
                fontWeight: 900,
                width: "15vw",
              }}
              variant="standard"
            >
              Трехмесячные
            </Button>
            <Button
              className="sideBtn"
              value="Полугодичный"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="полугодичные"
              sx={{
                display: "block",
                fontWeight: 900,
                width: "15vw",
              }}
            >
              Полугодичные
            </Button>
            <Button
              className="sideBtn"
              value="Годичный"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="Годичные"
              sx={{
                display: "block",
                fontWeight: 900,
                width: "15vw",
              }}
            >
              Годичные
            </Button>
            <Button
              className="sideBtn"
              value="Двухгодичный"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="Двухгодичные"
              sx={{
                display: "block",
                fontWeight: 900,
                width: "15vw",
              }}
            >
              Двухгодичные
            </Button>

            <Button
              className="sideBtn"
              value="all"
              onClick={(e) => fetchByParams("type", e.target.value)}
              label="все"
              sx={{
                display: "block",
                fontWeight: 900,
                width: "15vw",
              }}
            >
              все
            </Button>
          </Paper>
        </Grid>
      ) : (
        " "
      )}
    </>
  );
};

export default SideBar;
