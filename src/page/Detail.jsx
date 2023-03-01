import React from "react";

import Detailleftbox from "../components/detail/Detailleftbox";
import Detiallrightbox from "../components/detail/Detiallrightbox";
import { Detailbox } from "../components/detail/style";
import Header from "../components/header/Header";
// import RenderHeader from "../components/header/RenderHeader";
function Detail() {
  return (
    <>
      <Header/>
      <Detailbox> 
        <Detailleftbox />
        <Detiallrightbox />
      </Detailbox>
    </>
  );
}

export default Detail;
