import React from "react";

export const Subscribe = () => {
  return (
    <section id="Subscribe" className="bg-primary text-light p-5">
      <div className="container d-flex justify-content-center ">
        <div className="d-mb-flex w-50 p-3 text-center">
          <h2 className="mb-3 mb-2 md-0 "> Reach me </h2>
          <div className="input-group mb-3 box-email">
            <input type="email" className="form-control" placeholder="Email" />
              <a href="mailto:santichiste@hotmail.com"className="btn btn-dark btn-lg" >
                Send
              </a>           
          </div>
        </div>
      </div>
    </section>
  );
};
