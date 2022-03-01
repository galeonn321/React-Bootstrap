export const Instructors = () => {
  return (
    <section id="instructors" className="p-5 bg-dark">
      <div className="container">
        <h2 className="text-white text-center">My projects</h2>
        <p className="lead text-white text-center">
        Most of the projects below are either from University or independently made by me. This area will also be constantly updated with my most recent projects.
        </p>
        <div className="row g-4 d-flex align-items-stretch">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="/assets/1st project.png"
                  className="rounded-circle border border-3 border-dark mb-3 w-75"
                  alt="project_1"
                ></img>
                <h3 className="card-title mb-3">1st Project</h3>
                <p className="card-text lead">
                A project mainly done to learn the absolute basics of HTML, CSS & Javascript where we freely experimented with the basics of every language using visual code & github.
                </p>
                <a href="https://github.com/galeonn321/1st_Project_Eduardo" className="btn btn-primary"> Github project</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="/assets/2nd project.png"
                  alt="project 2 content"
                  className="rounded-circle border border-3 border-dark mb-3 img-fluid w-75"
                />
                <h3 className="card-title mb-3">2nd Project</h3>
                <p className="card-text lead">
                A website where we learned to make an alarm using local and session storage, also used for the first time an API that brind the weather of the selected country or city.
                </p>
                <a href="https://github.com/galeonn321/VantoTheFuture_2nd-project" className="btn btn-primary">Github Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="/assets/3rd project.png"
                  alt="project 3 content"
                  className="rounded-circle border border-3 border-dark mb-3 img-fluid w-75"
                />
                <h3 className="card-title mb-3">3rd project</h3>
                <p className="card-text lead">
                The main goal of this website was to use the latest version of React and use an  API from giphy.com where I can bring 10 gifs according to what the user writes in the box.
                </p>
                <a href="https://loving-hopper-004310.netlify.app/" className="btn btn-primary" >Netlify Link</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="/assets/4th Project.png"
                  alt="project 4 content"
                  className="rounded-circle border border-3 border-dark mb-3 w-75"
                />
                <h3 className="card-title mb-3">4th Project</h3>
                <p className="card-text lead">
                A React project where I was able to call a <strong>(omdb API)</strong> where I could bring data about the films such as actors, Rating, image and a short description of each film. 
                </p>
                <a href="https://github.com/galeonn321/React_Movies" className="btn btn-primary" >Github Link</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="/assets/perfil1.jpg"
                  alt="project 5 content"
                  className="rounded-circle border border-3 border-dark mb-3"
                />
                <h3 className="card-title mb-3">Future projects...</h3>
                <p className="card-text lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis harum quia. Dolorum nulla maxime sint animi cupiditate enim a dignissimos possimus illum. Laborum, doloremque.
                </p>
                <a href="/" className="bi bi-twitter" />
                <a href="/" className="bi bi-linkedin p-5" />
                <a href="/" className="bi bi-instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
