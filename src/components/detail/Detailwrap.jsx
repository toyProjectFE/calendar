import React from "react";
import Detiallrightbox from "./Detiallrightbox";
import Detailleftbox from "./Detailleftbox";
import { Detailbox } from "./style";

function Detailwrap() {
  return (
    <Detailbox>
      <Detailleftbox />
      <Detiallrightbox />
    </Detailbox>
  );
}

export default Detailwrap;
