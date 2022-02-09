export const IntroModal = () => {

    
  return (
    <div class="modal" id="enroll">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
