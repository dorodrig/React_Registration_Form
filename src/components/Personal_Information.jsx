import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signUpSchema } from "../schemas/signUp";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Personal_Information = () => {
  let { setStep } = useContext(AuthContext);
  const initialValues = {
    fullName: "",
    last: "",
    numberDocument: "",
    expedition: "",
    birthdate: "",
    place_birthdate: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
      >
        <div className="container__personal">
          <h2>Personal Information</h2>
          <Form autoComplete="off">
            <fieldset>
              <div className="names">
                <div className="names__full_name">
                  <label htmlFor="full_name__fullName">First Name</label>
                  <Field name="fullName" id="fullName" type="text" autoFocus />
                  <ErrorMessage
                    name="fullName"
                    component="p"
                    className="error-message"
                  />
                </div>
                <div className="lastName">
                  <label htmlFor="last_name">Last Name</label>
                  <Field name="last" id="last" type="text" />
                  <ErrorMessage
                    name="last"
                    component="p"
                    className="error-message"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="typeDocument">
                <div className="droplist">
                  <label htmlFor="typeDocument">Type of Document</label>
                  <select name="typeDocument" id="droplist__typeDocument">
                    <option value="cc">C.C</option>
                    <option value="ce">C.E</option>
                    <option value="idcard">ID Card</option>
                    <option value="passport">Passport</option>
                    <option value="Immigration_permit">
                      Immigration permit
                    </option>
                  </select>
                  {/* <p className="error">Required</p> */}
                </div>
                <div className="numberDocument">
                  <label htmlFor="numberDocument">Number of Document</label>
                  <Field
                    name="numberDocument"
                    id="numberDocument"
                    type="text"
                  />
                  <ErrorMessage
                    name="numberDocument"
                    component="p"
                    className="error-message"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="expedition">
                <div className="date_expedition">
                  <label htmlFor="expedition">Document issue date</label>
                  <input type="date" id="expedition" />
                  <p className="error">Required</p>
                </div>
                <div className="place_expedition">
                  <label htmlFor="expedition">
                    Place of issue of the document
                  </label>
                  <input type="text" id="expedition" />
                  {/* <p className="error">Required</p> */}
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="birthdate">
                <div className="date_birthdate">
                  <label htmlFor="date_birthdate">Dobirthdate</label>
                  <input type="date" id="birthdate" />
                  <p className="error">Required</p>
                </div>
                <div className="place_birthdate">
                  <label htmlFor="place_birthdate">Place of birth</label>
                  <input type="text" id="place_birthdate" />
                  <p className="error">Required</p>
                </div>
              </div>
            </fieldset>
            <div className="button">
              <input
                type="button"
                value="Back"
                onClick={() => setStep("signin")}
              />
              <input
                type="submit"
                value="Next"
                onClick={() => setStep("educational")}
              />
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default Personal_Information;
