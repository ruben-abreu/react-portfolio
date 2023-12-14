import avatar from '../assets/Screenshot 2023-12-14 at 17.36.03.png';

function Home() {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='text-center text-xl'>
          <div>
            <h3>Hello Everyone!</h3>
          </div>
          <p>
            My name is Ruben. <span> {`I'm a full stack developer`} </span>
          </p>
          <div className='flex items-center md:mt-24'>
            <button className='navbar-btn'>My CV</button>
            <a
              href='https://www.linkedin.com/in/ruben-abreu1/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='navbar-btn'>LinkedIn</button>
            </a>
            <a
              href='https://github.com/ruben-abreu'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='navbar-btn'>Github</button>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <img src={avatar} alt='avatar' className='mx-auto' width='200px' />
        </div>
      </div>
    </div>
  );
}

export default Home;
