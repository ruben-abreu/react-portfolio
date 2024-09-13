import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = section => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className='header'>
      <nav className='max-w-[100%]'>
        <div className='logo'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            onClick={() => closeMenu('home')}
          >
            {`<Ruben`}
            <span>{`Abreu/>`}</span>
          </Link>
        </div>
        <input
          type='checkbox'
          id='menu-toggle'
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor='menu-toggle' className='menu-icon'>
          &#9776;
        </label>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              onClick={() => closeMenu('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              onClick={() => closeMenu('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              smooth={true}
              duration={500}
              onClick={() => closeMenu('skills')}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              className='navbar-btn'
              smooth={true}
              duration={500}
              onClick={() => closeMenu('contact')}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
