import { ReactComponent as Gmail } from '../assets/gmail.svg';
import { ReactComponent as Line } from '../assets/Line.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Github } from '../assets/github.svg';

const Hero = () => {
  return (
    <section id="home" className="py-5 text-center relative z-minus">
      <div className="container">
        <h4 className="fs-6 fw-5 typewriter">Hello there!</h4>
        <h1 className="fs-1 fw-5 typewriter2">
          I am <span className="fw-1">Panat Putnak</span>
        </h1>
        <h4 className="fs-6 my-1 qualification">A Full Stack Developer</h4>
        <div className="flex justify-center icon-container">
          <Gmail />
          <Line />
          <Twitter />
          <Github />
        </div>
        <button type="button" className="btn my-1">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
