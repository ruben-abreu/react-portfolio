import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='header'>
      <nav>
        <div className='logo'>
          <Link to='#'>
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
            <Link to='#about'>About Me</Link>
          </li>

          <li>
            <Link to='#projects'>Projects</Link>
          </li>
          <li>
            <Link to='#skills'>Skills</Link>
          </li>
          <li>
            <Link to='#contact' className='navbar-btn'>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
