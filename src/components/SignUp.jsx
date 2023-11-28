import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
const SignUp = () => {
  let { setStep } = useContext(AuthContext);
  // Datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Focus de los inputs del formulario
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handlerSubmit = (e) => {
    // Evita el envío de datos a un backend
    e.preventDefault(setStep("personal"));
    // console.log("Sending data to backend...");
    // console.log(`El usuario digitó: ${email} y ${password}`);
    //setStep("personal");
  };
  return (
    <main>
      <h3>Welcome, Join us!</h3>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="fullName">User name</label>
            <input type="text" id="fullName" />
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoFocus
              required
              onBlur={() => setEmailFocused(true)}
              data-focused={emailFocused}
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              pattern="(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              onBlur={() => setPasswordFocused(true)}
              data-focused={passwordFocused}
            />
            <p className="error">Password is required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="confirm">Confirm password</label>
            <input
              type="password"
              id="confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              onBlur={() => setPasswordFocused(true)}
              data-focused={passwordFocused}
            />
            <p className="error">required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="framework">Favorite framework</label>
            <select id="framework">
              <option value="">Select your framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
            <p className="error">required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" /> Accept terms and conditions
            </label>
            <p className="error error-terms">required</p>
          </fieldset>
          <button type="submit">Register</button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span onClick={() => setStep("signin")}>Sign in</span>
      </p>
    </main>
  );
};

export default SignUp;
