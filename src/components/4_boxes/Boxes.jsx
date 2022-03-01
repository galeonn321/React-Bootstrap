import React from "react";

export const Boxes = () => {
  return (
    <section className="p-5 ">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3 className="card-title mb-3">Technology</h3>
                <p className="card-text ">
                  The IT world has always been of great interest to me. It
                  started as a self-taught hobby where I curiously learned about
                  computers and then decided to go beyond in Front-end
                  development.<br></br>
                  <a
                    href="https://github.com/galeonn321"
                    className="btn btn-primary mt-3"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person"></i>
                </div>
                <h3 className="card-title mb-3">Me</h3>
                <p className="card-text">
                  Currently raising my skills everyday to build engaging,
                  interactive user experiences with the latest technologies and
                  frameworks available as a front-end developer.
                  <br></br>
                  <a
                    href="https://media-exp1.licdn.com/dms/document/C562DAQE3PLqkGRiIgA/profile-treasury-document-pdf-analyzed/0/1646046355944?e=1646136000&v=beta&t=9_J6anhCG7R6V0Idc7Nz9_gB86id0SoIU5tl2qQ5Ewg"
                    className="btn btn-primary mt-3"
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="card-title mb-3">Teamwork</h3>
                <p className="card-text pb-5">
                  Always had the ability to adapt, contribute and work in
                  groups, even when difficult times are at hand.<br></br>
                </p>
                <a
                  href="https://github.com/galeonn321"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
