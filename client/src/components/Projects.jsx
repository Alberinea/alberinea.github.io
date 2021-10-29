import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { useInView } from 'react-intersection-observer';
import inViewOptions from '../utils/inViewOptions';
('../utils/inViewOptions');
import projects from '../utils/projects';

const Projects = () => {
  const { ref, inView } = useInView(inViewOptions);
  const [current, setCurrent] = useState(0);

  const increment = () => {
    if (current === projects.length - 1) {
      return setCurrent(0);
    }
    setCurrent((prev) => prev + 1);
  };

  const decrement = () => {
    if (current === 0) {
      return setCurrent(projects.length - 1);
    }
    setCurrent((prev) => prev - 1);
  };

  const goto = (index) => {
    setCurrent(index);
  };

  return (
    <section
      id="projects"
      className={
        inView
          ? 'bg-black full text-white py-1 appear'
          : 'bg-black full text-white py-1 disappear'
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
        <div className="px-1">
          {projects.map(
            (project, i) =>
              current === i && (
                <div key={v4()} className="image-container">
                  <div className="top-bar justify-between text-black no-select">
                    <span className="pr-3" />
                    <p className="">{project.title}</p>
                    <div className="flex top-bar-right align-center">
                      <span>&#8722;</span>
                      <span className="fs-9">&#x2715;</span>
                    </div>
                  </div>
                  <div className="hover-container">
                    <img src={project.image} alt={project.title} />
                    <div className="hover">
                      <p>{project.text}</p>
                      <div className="flex flex-wrap py-1 mx-auto justify-center">
                        {project.tags.map((tag) => (
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
                          href={project.demo}
                        >
                          Live demo
                        </a>
                        <a
                          className="button-49 round-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.source}
                        >
                          Source code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <ul className="flex bullet-container">
          {projects.map((project, i) => (
            <li key={v4()}>
              <span
                className={i === current ? 'bullet opacity-1' : 'bullet'}
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
