import { ReactComponent as Gmail } from '../assets/logos/gmail.svg';
import { ReactComponent as Line } from '../assets/logos/Line.svg';
import { ReactComponent as Github } from '../assets/logos/github.svg';

const Hero = () => {
  return (
    <section id="top" className="py-5 text-center relative z-minus">
      <div className="container">
        <h4 className="fs-6 fw-5 typewriter">Hello there!</h4>
        <h1 className="fs-1 fw-5 typewriter2">
          I am <span className="fw-1">Panat Putnak</span>
        </h1>
        <h4 className="fs-6 my-1 qualification">A Full Stack Developer</h4>
        <div className="flex justify-center icon-container">
          <a
            href="mailto:kan9870@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gmail />
          </a>
          <a
            href="http://line.me/ti/p/~mustex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Line />
          </a>
          <a
            href="https://github.com/Alberinea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
        <button type="button" className="btn my-1">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
