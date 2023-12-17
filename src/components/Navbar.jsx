/* eslint-disable react/prop-types */
import { Link } from 'react-scroll';

function Navbar({ scrollToSection }) {
  return (
    <header className='header'>
      <nav className='max-w-[100%]'>
        <div className='logo'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            onClick={() => scrollToSection('home')}
          >
            {`<Ruben`}
            <span>{`Abreu/>`}</span>
          </Link>
        </div>
        <input type='checkbox' id='menu-toggle' />
        <label htmlFor='menu-toggle' className='menu-icon'>
          &#9776;
        </label>
        <ul className='menu'>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              smooth={true}
              duration={500}
              onClick={() => scrollToSection('skills')}
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
              onClick={() => scrollToSection('contact')}
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
