import React from "react";
import { Grid } from "@material-ui/core";
import GridElement from "./GridElement";

function BookGrid(props) {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={40} justify="center">
        {props.result && props.result.length !== 0 &&
          props.result.map((el, i) => <GridElement key={i} item={el} />)}
      </Grid>
    </div>
  );
}

export default BookGrid;
