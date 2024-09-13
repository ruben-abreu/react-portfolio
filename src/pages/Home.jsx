import avatar from '../assets/IMG_4976.jpeg';
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
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className='flex items-center justify-center h-[80vh] pt-[80px] md:pt-[0]'>
      <div className='flex flex-col items-center'>
        <div className='text-center md:text-xl'>
          <div>
            <h3>Hello Everyone!</h3>
          </div>
          <p>
            {`My name is Ruben, `}
            <span className='text-[#4CB9E7] shadow-custom'>{displayText}</span>
          </p>
        </div>
        <div className='text-center mb-4 mt-4'>
          <img
            src={avatar}
            alt='avatar'
            className='mx-auto rounded-lg opacity-[0.88] mt-4'
            width='240px'
          />
        </div>
        <div className='md:flex items-center justify-center gap-4 md:mt-8'>
          <button className='navbar-btn flex items-center justify-center w-[150px] h-[45px]'>
            <ArticleIcon className='mr-2' />
            My CV
          </button>
          <a
            href='https://www.linkedin.com/in/rm-abreu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='navbar-btn flex items-center justify-center w-[150px] h-[45px]'>
              <LinkedInIcon className='mr-2' />
              LinkedIn
            </button>
          </a>
          <a
            href='https://github.com/ruben-abreu'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='navbar-btn flex items-center justify-center w-[150px] h-[45px]'>
              <GitHubIcon className='mr-2' />
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
