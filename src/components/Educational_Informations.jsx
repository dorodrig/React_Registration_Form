const Educational_Informations = () => {
  return (
    <main>
      <h2>Educational Information</h2>
      <form autoComplete="off">
        <fieldset>
          <div className="educational_container">
            <div className="educational_container__title">
              <label htmlFor="title">Qualification</label>
              <input type="text" name="Qualification" id="Qualification" />
            </div>
            <div className="educational_container__country">
              <label htmlFor="country">Country</label>
              <select name="droplist_country" id="droplist_country">
                <option value="seleccion">Seleccione</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Peru">Peru</option>
              </select>
            </div>
            <div className="educational_container__institution">
              <label htmlFor="institution">Institution</label>
              <input type="text" name="institution" id="institution" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="container-status">
            <div className="Study_level">
              <label htmlFor="Study_level">Study level</label>
              <select name="Study_level" id="droplist_Study_level">
                <option value="Seleccione"> Seleccione</option>
                <option value="Secondary">Secondary</option>
                <option value="Technique">Technique</option>
                <option value="academic">Aademic</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="master">Master</option>
                <option value="Doctorate">Doctorate</option>
                <option value="Otro">Otro</option>
              </select>
              <p className="error">Required</p>
            </div>
            <div className="container-status__status">
              <label htmlFor="status">Status</label>
              <select name="droplist_status" id="droplist_status">
                <option value="seleccion">Seleccione</option>
                <option value="Graduado">Graduado</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Egresado">Egresado</option>
              </select>
            </div>
            <div className="container-status__finalized">
              <label htmlFor="finalized">Finalized</label>
              <select name="finalizes__year" id="finalizes__year">
                <option value="seleccione">seleccione </option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Educational_Informations;
