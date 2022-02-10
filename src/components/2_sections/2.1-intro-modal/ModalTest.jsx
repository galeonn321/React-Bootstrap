import {  Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const ModalTest = ({ isOpen, setIsOpen }) => {
  const close = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={() => close()}>Register</ModalHeader>
      <ModalBody>
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
      </ModalBody>
      <ModalFooter>
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={() => close()}
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </ModalFooter>
    </Modal>
  );
};
