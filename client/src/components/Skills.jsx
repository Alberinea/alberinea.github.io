import { useInView } from 'react-intersection-observer';
import inViewOptions from '../utils/inViewOptions';
import { ReactComponent as HTML } from '../assets/skills/icons8-html-5.svg';
import { ReactComponent as CSS } from '../assets/skills/icons8-css3.svg';
import { ReactComponent as Javascript } from '../assets/skills/icons8-javascript.svg';
import { ReactComponent as Typescript } from '../assets/skills/icons8-typescript.svg';
import { ReactComponent as React } from '../assets/skills/icons8-react-native.svg';
import { ReactComponent as Nodejs } from '../assets/skills/icons8-nodejs.svg';
import { ReactComponent as Bootstrap } from '../assets/skills/icons8-bootstrap.svg';
import { ReactComponent as TailwindCSS } from '../assets/skills/tailwindcss-icon.svg';
import { ReactComponent as Git } from '../assets/skills/icons8-git.svg';
import { ReactComponent as MongoDB } from '../assets/skills/icons8-mongodb.svg';
import { ReactComponent as Unix } from '../assets/skills/gnu_bash-icon.svg';

const Skills = () => {
  const { ref, inView } = useInView(inViewOptions);

  return (
    <section
      id="skills"
      className={
        inView
          ? 'py-5 appear relative z-minus'
          : 'py-5 disappear relative z-minus'
      }
    >
      <div className="container text-center">
        <div className="pb-2" ref={ref}>
          <h4 className="pb-2">Language</h4>
          <div className="flex flex-wrap justify-center">
            <div className="tooltip" data-tooltip="HTML">
              <HTML />
            </div>
            <div className="tooltip" data-tooltip="CSS">
              <CSS />
            </div>
            <div className="tooltip" data-tooltip="Javascript">
              <Javascript />
            </div>
            <div className="tooltip" data-tooltip="Typescript">
              <Typescript />
            </div>
          </div>
        </div>
        <div className="pb-2">
          <h4 className="pb-2">Framework</h4>
          <div className="flex flex-wrap justify-center">
            <div className="tooltip" data-tooltip="React">
              <React />
            </div>
            <div className="tooltip" data-tooltip="NodeJS + Express">
              <Nodejs />
            </div>
            <div className="tooltip" data-tooltip="Bootstrap">
              <Bootstrap />
            </div>
            <div className="tooltip" data-tooltip="TailwindCSS">
              <TailwindCSS />
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="pb-2">Tech</h4>
          <div className="flex justify-center ">
            <div className="tooltip" data-tooltip="Git">
              <Git />
            </div>
            <div className="tooltip" data-tooltip="NoSQL (MongoDB)">
              <MongoDB />
            </div>
            <div className="tooltip" data-tooltip="Unix Shell">
              <Unix className="unix" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
