import { useState } from "react";
import AuthContext from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Personal_Information from "./components/Personal_Information";
import Educational_Information from "./components/Educational_Information";
import SignIn from "./components/SignIn";

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
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
