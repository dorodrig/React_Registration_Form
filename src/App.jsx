import { useState } from "react";
import AuthContext from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Personal_Information from "./components/Personal_Information";
import Educational_Information from "./components/Educational_Information";

function App() {
  const [step, setStep] = useState("educational");
  return (
    <>
      <AuthContext.Provider value={{ step, setStep }}>
        <div className="container">
          {step === "signup" && <SignUp />}
          {step === "personal" && <Personal_Information />}
          {step === "educational" && <Educational_Information />}
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
