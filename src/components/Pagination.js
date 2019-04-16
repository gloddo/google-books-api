import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

function Pagination(props) {
  return (
    <div>
      <KeyboardArrowLeft onClick={() => props.changePage(-10)} />
      <KeyboardArrowRight onClick={() => props.changePage(10)} />
      <span>
        Page {props.actualPage || 0} - {props.totalPages || 0}
      </span>
    </div>
  );
}

export default Pagination;
