const Personal_Information = () => {
  return (
    <>
      <div className="container__personal">
        <h2>Personal Information</h2>
        <form autoComplete="off">
          <fieldset>
            <div className="names">
              <div className="names__full_name">
                <label htmlFor="full_name__fullName">First Name</label>
                <input type="text" id="full_name__fullName" />
                <p className="error">Required</p>
              </div>
              <div className="names__last_name"></div>
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" />
              <p className="error">Required</p>
            </div>
          </fieldset>
          <fieldset>
            <div className="typeDocument">
              <label htmlFor="typeDocument">Type of Document</label>
              <select name="typeDocument" id="typeDocument">
                <option value="cc">C.C</option>
                <option value="ce">C.E</option>
                <option value="idcard">ID Card</option>
                <option value="passport">Passport</option>
                <option value="Immigration_permit">Immigration permit</option>
              </select>
            </div>
            <div className="numberDocument">
              <label htmlFor="numberDocument">Number of Document</label>
              <input type="text" id="numberDocument" />
              <p className="error">Required</p>
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
                <p className="error">Required</p>
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
        </form>
      </div>
    </>
  );
};

export default Personal_Information;