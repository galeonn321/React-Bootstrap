import React from "react";

export const Subscribe = () => {
  return (
    <section className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between aligh-times-center">
          <h3 className="mb-3 mb-md-0"> Subscribe to our Willyrex world</h3>
          <div className="input-group mb-3 box-email">
            <input type="email" className="form-control" placeholder="Email" />
              <button className="btn btn-dark btn-lg" >
                Send
              </button>           
          </div>
        </div>
      </div>
    </section>
  );
};
