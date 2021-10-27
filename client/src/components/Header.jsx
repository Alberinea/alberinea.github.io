import logo from '../assets/logo.svg'

const Header = ()  => {
  return (
    <header className="nav-bar">
      <nav className="flex justify-between px-1">
        <img src={logo} alt="logo" />
        <ul className="flex navbar-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-toggle">
          <div className="navbar-toggle-inside"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header
