import { useState } from "react";
import AuthContext from "./context/AuthContext";
import SignUp from "./components/SignUp";

function App() {
  const [step, setStep] = useState("signup");
  return (
    <>
      <AuthContext.Provider value={{ step, setStep }}>
        <div className="container">{step === "signup" && <SignUp />}</div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
