import { useInView } from 'react-intersection-observer';
import inViewOptions from '../utils/inViewOptions';

const About = () => {
  const { ref, inView } = useInView(inViewOptions);

  return (
    <section
      id="about"
      className={
        inView
          ? 'bg-black full py-5 text-white appear'
          : 'bg-black full py-5 text-white disappear'
      }
    >
      <div className="container text-center">
        <h2 className="pb-2 fw-3" ref={ref}>
          Hi, my name is Panat Putnak
        </h2>
        <p className="text">
          I am an ambitious and passionate self-taught full stack web developer
          who is keen on good design and new tech. <br /> I have strong Understanding
          in modern frameworks and my motto is to never stop learning. <br /> Devoted to building
          user-friendly, interactive websites and always strive to find a new way to solve problems.
        </p>
      </div>
    </section>
  );
};

export default About;
