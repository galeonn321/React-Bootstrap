export const IntroSection = () => {
  return (
    <section className="bg-dark text-light p-5 text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between ">
          <div className="">
            <h1 className="text-center">
              Viva Cristo rey y Jesus pero ante todo
              <span className="text-warning  d-flex justify-content-center align-items-center">
                WILLYREX
              </span>
            </h1>
            <p className="lead text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Natus provident veniam vero beatae rerum, nihil quo? Pariatur odit
              natus,
              <br /> inventore laudantium numquam exercitationem repellendus
              nesciunt.
            </p>
            <div className="text-center mt-5">
              <button
                className="btn btn-primary btn-lg"
                data-bs-toogle="modal"
                data-bs-target="#enroll"
              >
                Start journey
              </button>
            </div>
          </div>
          <img
            src="assets/dc-arrow.jpg"
            alt="tryhard"
            className="img-fluid w-25 m-5 d-none d-sm-block rounded border border-white"
          ></img>
        </div>
      </div>
    </section>
  );
};
