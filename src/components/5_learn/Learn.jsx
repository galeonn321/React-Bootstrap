export const Learn = () => {
  
  return (
    <section id="learn" className="p-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md ">
                <img src="assets/learnImage.jpeg" alt="react" className="img-fluid"></img>
          </div>
          <div className="col-md p-5">
            <h2 className="text-center"> Let's begin with our first learnings.</h2>
            <p className="lead">I never stop learning the core technologies such as HTML, CSS, Javascript to keep my basics always on top and ready to expand to the latest frameworks.</p>
            <p className="lead">GIT, NPM libraries, Version control, Github, Azure DevOps are also my priorities in a long-term development.</p>
            <a href="/" className="btn btn-dark mt-5"><i className="bi bi-chevron-right"></i> Read more </a>
          </div>
        </div>
      </div>
    </section>
  );
};
