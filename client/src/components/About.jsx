import { useInView } from 'react-intersection-observer';
import inViewOptions from '../utils/inViewOptions'

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
          Lorem, ipsum dolor sit
        </h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quam totam accusamus iure obcaecati ut non dolorem
          repudiandae qui odit, voluptate eum illo at sunt consectetur provident
          possimus reprehenderit nisi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Necessitatibus quam totam accusamus iure obcaecati
          ut non dolorem repudiandae qui odit, voluptate eum illo at sunt
          consectetur provident possimus reprehenderit nisi?
        </p>
      </div>
    </section>
  );
};

export default About;
