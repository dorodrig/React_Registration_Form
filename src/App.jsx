import { useState } from "react";
import AuthContext from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Personal_Information from "./components/Personal_Information";

function App() {
  const [step, setStep] = useState("personal");
  return (
    <>
      <AuthContext.Provider value={{ step, setStep }}>
        <div className="container">
          {step === "signup" && <SignUp />}
          {step === "personal" && <Personal_Information />}
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
