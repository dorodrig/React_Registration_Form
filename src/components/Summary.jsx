// import { useState } from "react";
// import AuthContext from "./context/AuthContext";
import SignUp from "./SignUp";
import Personal_Information from "./Personal_Information";
import Educational_Information from "./Educational_Information";
import SignIn from "./SignIn";
import Work_Experience from "./Work_Experience";
const Summary = () => {
  return (
    <div className="container">
      <Personal_Information />
      <Educational_Information />
      <Work_Experience />
    </div>
  );
};

export default Summary;
