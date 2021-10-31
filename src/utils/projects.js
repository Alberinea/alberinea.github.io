import Paystore from '../assets/projects/Paystore.png';
import TNW from '../assets/projects/TNW.png';
import MemoryGame from '../assets/projects/Memory Game.png';
import Illusion from '../assets/projects/Illusion.png';
import Blog from '../assets/projects/Blog.png';
import INCB from '../assets/projects/INCB.png';
import Battleship from '../assets/projects/Battleship.png';
import CV from '../assets/projects/Cv App.png';

const projects = [
  {
    title: 'Shopping Cart',
    image: Paystore,
    tags: ['Typescript', 'React', 'CSS'],
    demo: 'https://alberinea.github.io/shopping-cart',
    source: 'https://github.com/Alberinea/shopping-cart',
    text: 'A react project built with typescript and utilized react-router-dom to create routes. Incorporate IGDB API which ensures that the content will always be up to date.',
  },
  {
    title: 'TNW Clone',
    image: TNW,
    tags: ['HTML', 'TailwindCSS'],
    demo: 'https://alberinea.github.io/tnw-clone',
    source: 'https://github.com/Alberinea/tnw-clone',
    text: 'An exact clone of a tech news website, TNW. Fully responsive with the help of CSS grid and flexbox.',
  },
  {
    title: 'Blog API',
    image: Blog,
    tags: [
      'Javascript',
      'Bootstrap',
      'React',
      'Node + Express',
      'NoSQL(MongoDB)',
    ],
    demo: 'https://alberinea.github.io/blog-api',
    source: 'https://github.com/Alberinea/blog-api',
    text: 'A simple fullstack CRUD Blog that built with MERN stack(MongoDB, Express, React and NodeJS). Frontend is hosted on GitHub Pages while Backend is hosted on Heroku. Uses JSON Web Token to authenticate user and protect sensitive routes.',
  },
  {
    title: 'Memory Game',
    image: MemoryGame,
    tags: ['Typescript', 'React'],
    demo: 'https://alberinea.github.io/memory-game',
    source: 'https://github.com/Alberinea/memory-game',
    text: 'A memory game built with React to practice using hooks, lifecycle methods and states.',
  },
  {
    title: 'CV Application',
    image: CV,
    tags: ['Typescript', 'CSS', 'React'],
    demo: 'https://alberinea.github.io/cv-application',
    source: 'https://github.com/Alberinea/cv-application',
    text: 'A responsive CV app maker that a user can upload user image and change theme color with a function to download the finished CV.',
  },
  {
    title: 'Member only message board',
    image: Illusion,
    tags: ['Javascript', 'Bootstrap', 'node + express', 'noSQL(MongoDB)'],
    demo: 'https://illusion-9503.herokuapp.com',
    source: 'https://github.com/Alberinea/member-only-message-board',
    text: 'A session based authentication CRUD message board with registration and login function. Included Sanitization and Input validation to enhance security and provide seamless user interface.',
  },
  {
    title: 'Inventory Application',
    image: INCB,
    tags: ['Javascript', 'TailwindCSS', 'Node + Express', 'NoSQL(MongoDB)'],
    demo: 'https://incb-11.herokuapp.com',
    source: 'https://github.com/Alberinea/inventory-application',
    text: 'A server-side rendering that can query database and show results accordingly.',
  },
  {
    title: 'Battleship',
    image: Battleship,
    tags: ['HTML', 'Typescript', 'CSS'],
    demo: 'https://alberinea.github.io/Battleship',
    source: 'https://github.com/Alberinea/Battleship',
    text: 'A battleship game that using AI with Probability Density Functions and hunt algorithms.',
  },
];

export default projects;
