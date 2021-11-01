import { ReactComponent as Github } from '../assets/logos/github-dark.svg';
import { ReactComponent as Facebook } from '../assets/logos/facebook-dark.svg';
import { ReactComponent as Line } from '../assets/logos/line-dark.svg';
import { ReactComponent as Gmail } from '../assets/logos/gmail-dark.svg';

const Footer = () => {
  return (
    <footer className="bg-black full py-3 text-white text-center mt-auto">
      <div className="container">
        <div className="flex justify-center icon-footer-container flex-wrap">
          <a
            href="mailto:kan9870@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gmail />
          </a>
          <a
            href="https://www.facebook.com/panat.putnak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
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
        <h5>
          Copyright © 2021 <span className="fw-3">Panat Putnak</span> All Rights
          Reserved
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
