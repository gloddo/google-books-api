import React from "react";
import { Grid } from "@material-ui/core";
import GridElement from "./GridElement";

function BookGrid(props) {
  if (props.result && props.result.length !== 0) {
    return (
      <div className="books">
        <Grid container spacing={40} justify="center">
          {props.result.map((el, i) => (
            <GridElement key={i} item={el} />
          ))}
        </Grid>
      </div>
    );
  }
  return <div />;
}

export default BookGrid;
