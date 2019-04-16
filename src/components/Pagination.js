import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

function Pagination(props) {
  return (
    props.totalPages !==0 && (
      <div className="change-page">
        <KeyboardArrowLeft onClick={() => props.changePage(-12)} />
        <span>
          Page {props.actualPage+1 || 0} - {props.totalPages+1 || 0}
        </span>
        <KeyboardArrowRight onClick={() => props.changePage(12)} />
      </div>
    )
  );
}

export default Pagination;
