import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
const SignIn = () => {
  let { setStep } = useContext(AuthContext);
  return (
    <main>
      <h3>Hello, friend!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" id="email" required />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password:</label>
            <input type="password" id="password" required />
            <p className="error">Valid password required</p>
          </fieldset>
          <button type="submit" onClick={() => setStep("personal")}>
            login
          </button>
        </form>
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => setStep("signup")}>Sign up</span>
      </p>
    </main>
  );
};

export default SignIn;
