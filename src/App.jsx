import { useState } from "react";
import AuthContext from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Personal_Information from "./components/Personal_Information";
import Educational_Information from "./components/Educational_Information";
import SignIn from "./components/SignIn";
import Work_Experience from "./components/Work_Experience";
import Summary from "./components/Summary";

function App() {
  const [step, setStep] = useState("signin");
  return (
    <>
      <AuthContext.Provider value={{ step, setStep }}>
        <div className="container">
          {step === "signup" && <SignUp />}
          {step === "personal" && <Personal_Information />}
          {step === "educational" && <Educational_Information />}
          {step === "signin" && <SignIn />}
          {step === "work" && <Work_Experience />}
          {step === "summary" && <Summary />}
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
