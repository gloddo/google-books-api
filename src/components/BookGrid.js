import React from "react";
import { Grid } from "@material-ui/core";
import GridElement from "./GridElement";
import Pagination from "./Pagination";

function BookGrid(props) {
  if (props.result && props.result.length !== 0) {
    return (
      <div style={{ marginTop: 20, padding: 30 }}>
        <Pagination
          totalPages={props.totalItems / 10}
          changePage={props.changePage}
          actualPage={props.actualIndex / 10}
        />
        <Grid container spacing={40} justify="center">
          {props.result.map((el, i) => (
            <GridElement key={i} item={el} />
          ))}
        </Grid>
        <Pagination
          totalPages={props.totalItems / 10}
          changePage={props.changePage}
          actualPage={props.actualIndex / 10}
        />
      </div>
    );
  }
  return <div></div>
}

export default BookGrid;
