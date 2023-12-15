import avatar from '../assets/Screenshot 2023-12-14 at 17.36.03.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect, useState } from 'react';

function Home() {
  const [text, setText] = useState("I'm a full stack developer.");
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='text-center md:text-xl flex flex-col justify-center items-center h-full'>
          <div>
            <h3>Hello Everyone!</h3>
          </div>
          <p>
            {`My name is Ruben, `}
            <span className='  text-[#4CB9E7] shadow-custom '>
              {displayText}
            </span>
          </p>
          <div className='md:flex items-center justify-center gap-4 md:mt-24'>
            <button className='navbar-btn'>
              <ArticleIcon className='mr-1' />
              My CV
            </button>
            <a
              href='https://www.linkedin.com/in/ruben-abreu1/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='navbar-btn'>
                <LinkedInIcon className='mr-1' />
                LinkedIn
              </button>
            </a>
            <a
              href='https://github.com/ruben-abreu'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='navbar-btn'>
                <GitHubIcon className='mr-1' />
                Github
              </button>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <img
            src={avatar}
            alt='avatar'
            className='mx-auto rounded-lg'
            width='200px'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
