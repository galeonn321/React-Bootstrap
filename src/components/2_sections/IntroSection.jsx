import { useState } from "react";
import { Button } from "reactstrap";
import { ModalTest } from "./2.1-intro-modal/ModalTest";

export const IntroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-dark text-light p-5 text-sm-start mt-5">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between ">
          <div className="">
            <h1 className="text-center">
              Santiago Maruri Ramos
              <span className="text-warning  d-flex justify-content-center align-items-center">
                Front-end Developer
              </span>
            </h1>
            <p className="lead text-center ">
              Front-end development student at Hyper Island, I characterize
              myself as an empathic, observant, analytical and self-taught
              person. During my academic training I have stood out for my
              interest in technological development. Currently, I have knowledge
              in the domain of languages for frontend programming such as HTML,
              CSS, JavaScript, React, Bootstrap, GIT, POO, Version control and
              tools such as Visual Code, Figma.
            </p>
            <div className="text-center mt-5">
              <Button size="lg" color="primary" onClick={() => setIsOpen(true)}>
                Modal Example
              </Button>
            </div>
          </div>
          <img
            src="assets/perfil2.jpg"
            alt="Self selfie"
            className="img-fluid w-25 m-5 d-none d-sm-block rounded border border-white"
          ></img>
        </div>
      </div>
      <ModalTest isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};
