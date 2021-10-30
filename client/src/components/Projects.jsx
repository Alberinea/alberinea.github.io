import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import { v4 } from 'uuid';
import inViewOptions from '../utils/inViewOptions';
('../utils/inViewOptions');
import projects from '../utils/projects';

const Projects = () => {
  const { ref, inView } = useInView(inViewOptions);
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState('slide-right');

  const increment = () => {
    setDirection('slide-right');
    if (index === projects.length - 1) {
      return setIndex(0);
    }
    setIndex((prev) => prev + 1);
  };

  const decrement = () => {
    setDirection('slide-left');
    if (index === 0) {
      return setIndex(projects.length - 1);
    }
    setIndex((prev) => prev - 1);
  };

  const goto = (i) => {
    if (i > index) {
      setDirection('slide-right');
    } else {
      setDirection('slide-left');
    }
    setIndex(i);
  };

  React.useEffect(() => {
    const incrementInterval = setInterval(() => {
      increment();
    }, 8000);
    return () => {
      clearInterval(incrementInterval);
    };
  }, [index]);

  return (
    <section
      id="projects"
      className={
        inView
          ? 'bg-black relative z-minus full text-white py-1 appear'
          : 'bg-black relative z-minus full text-white py-1 disappear'
      }
    >
      <div className="container relative flex justify-center py-4">
        <span
          ref={ref}
          className="left-arrow no-select"
          onClick={() => decrement()}
        >
          &#60;
        </span>
        <span className="right-arrow no-select" onClick={() => increment()}>
          &#62;
        </span>
        <TransitionGroup
          childFactory={(child) =>
            React.cloneElement(child, { classNames: direction })
          }
          className="mx-1 image-container"
        >
          <CSSTransition
            key={v4()}
            timeout={400}
            classNames={direction}
            unmountOnExit
            appear
          >
            <div>
              <div className="top-bar justify-between text-black no-select">
                <span className="pr-3" />
                <p className="">{projects[index].title}</p>
                <div className="flex top-bar-right align-center">
                  <span>&#8722;</span>
                  <span className="fs-9">&#x2715;</span>
                </div>
              </div>
              <div className="hover-container">
                <img src={projects[index].image} alt={projects[index].title} />
                <div className="hover">
                  <p>{projects[index].text}</p>
                  <div className="flex flex-wrap py-1 mx-auto justify-center">
                    {projects[index].tags.map((tag) => (
                      <p className="pr-1 text-red" key={v4()}>
                        #{tag}
                      </p>
                    ))}
                  </div>
                  <div className="flex mx-auto justify-center">
                    <a
                      className="btn-outline mr-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={projects[index].demo}
                    >
                      Live demo
                    </a>
                    <a
                      className="button-49 round-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={projects[index].source}
                    >
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <ul className="flex bullet-container">
          {projects.map((project, i) => (
            <li key={v4()}>
              <span
                className={i === index ? 'bullet opacity-1' : 'bullet'}
                onClick={() => goto(i)}
              >
                &bull;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
