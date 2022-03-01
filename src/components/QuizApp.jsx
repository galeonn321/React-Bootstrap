import { Instructors } from "./7_instructors/Instructors";
import { Footer } from "./8_footer/Footer";
import { NavBar } from "./1_navbar/NavBar";
import { IntroModal } from "./2_sections/2.1-intro-modal/IntroModal";
import { IntroSection } from "./2_sections/IntroSection";
import { Subscribe } from "./3_subscribe/Subscribe";
import { Boxes } from "./4_boxes/Boxes";
import { Learn } from "./5_learn/Learn";
import { Learn2 } from "./5_learn/Learn2";
import { Questions } from "./6_accordion/Questions";

export const QuizApp = () => {
  return (
    <>
      <NavBar />
      <IntroSection />
      <Subscribe />
      <Boxes />
      <Learn />
      <Learn2 />
      <Questions />
      <Instructors />
      <Footer />
      <IntroModal />
    </>
  );
};
