const Work_Experience = () => {
  return (
    <main>
      <h2>Work Experince</h2>
      <form autoComplete="off">
        <fieldset>
          <div className="work_container">
            <div className="work_container__title">
              <label htmlFor="title">Job title</label>
              <input type="text" name="Qualification" id="Qualification" />
            </div>
            <div className="work_container__country">
              <label htmlFor="country">Hierarchy</label>
              <select name="droplist_country" id="droplist_country">
                <option value="seleccion">Seleccione</option>
                <option value="Colombia">Junior</option>
                <option value="Ecuador">Semi-Senior</option>
                <option value="Peru">Senior</option>
              </select>
            </div>
            <div className="work_container__institution">
              <label htmlFor="institution">company name</label>
              <input type="text" name="institution" id="institution" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="work_container__status">
            <div className="work_container__Studylevel">
              <label htmlFor="Study_level">Contry</label>
              <select name="Study_level" id="work_container_droplist">
                <option value="Seleccione"> Seleccione</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Peru">Peru</option>
                <option value="Venezuele">Venezuele</option>
                <option value="Otro">Otro</option>
              </select>
              <p className="error">Required</p>
            </div>
            <div className="work_container__industry">
              <label htmlFor="status">Type of industry</label>
              <input
                type="text"
                name="work_container__typeindustry"
                id="typeindustry"
              />
            </div>
            <div className="work_container__wcfinalized">
              <label htmlFor="finalized">Work area</label>
              <input type="text" name="finalizes__year" id="finalizes__year" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="datework">
            <div className="start">
              <label htmlFor="start">Start date</label>
              <input type="date" name="start" id="start" />
            </div>
            <div className="end">
              <label htmlFor="end">End date</label>
              <input type="date" name="end" id="end" />
            </div>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Work_Experience;
