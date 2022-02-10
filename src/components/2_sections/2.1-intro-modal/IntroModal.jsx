export const IntroModal = () => {
  return (
    <div className="modal" id="enroll">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="lead">Please fill out the form completely</p>
            <form>
              <div className="mb-3">
                <label className="col-form-label">Name :</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Lastname :</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email :</label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone :</label>
                <input type="text" className="form-control"></input>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
