import React from "react";
import "./RightContainer.css";
import Form from "./Form";
import { useState } from "react";

function RightContainer() {

  const [top, setTop] = useState(
    "Try it free 7 days then ₹180/mo. thereafter"
  );

  return (
    <>
     <p class="trial"> {top} </p>
     <Form setTop={setTop}/>
    </>
  );
}

export default RightContainer;
