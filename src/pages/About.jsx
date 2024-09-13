import { useState } from 'react';
import goku from '../assets/goku-learning-react-2.png';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2 className='text-[#0174be] text-2xl font-bold '>
        About <span className='text-white'>Me</span>
      </h2>
      <div className='flex flex-col lg:flex-row lg:justify-center items-center'>
        <div className='lg:hidden lg:max-w-[65%] p-4 pt-0 text-justify border border-white mx-auto lg:mr-10 lg:order-2'>
          <p className='mt-12'>
            &ensp;I started as a full stack developer with a transformative
            experience at Ironhack, renowned as one of the best bootcamps
            globally. The curriculum gave me with a diverse set of skills,
            ranging from front-end technologies like JavaScript and it's library
            React to back-end frameworks such as Node.js.
          </p>

          {isExpanded && (
            <div>
              <p className='mt-12'>
                &ensp;Throughout the bootcamp, I did projects that simulated
                real-world scenarios improving not only my coding abilities but
                also gaining a strong sense of teamwork.
              </p>
              <p className='mt-12 pb-4'>
                &ensp;I have a background in cybersecurity and as such I bring a
                unique perspective to my development work, prioritizing secure
                solutions. My cybersecurity expertise and passion for coding
                allows me to create applications that not only meet functional
                requirements but also adhere to the highest standards of data
                protection.
              </p>
            </div>
          )}

          <button
            className='text-[#4CB9E7] font-bold mt-4'
            onClick={toggleReadMore}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>

        <div className='hidden lg:block lg:max-w-[65%] p-4 pt-0 text-justify border border-white mx-auto lg:mr-10 lg:order-2'>
          <p className='mt-12'>
            &ensp;I started as a full stack developer with a transformative
            experience at Ironhack, renowned as one of the best bootcamps
            globally. The curriculum gave me with a diverse set of skills,
            ranging from front-end technologies like JavaScript and it's library
            React to back-end frameworks such as Node.js. Throughout the
            bootcamp, I did projects that simulated real-world scenarios
            improving not only my coding abilities but also gaining a strong
            sense of teamwork.
          </p>
          <p className='mt-12 pb-4'>
            &ensp;I have a background in cybersecurity and as such I bring a
            unique perspective to my development work, prioritizing secure
            solutions. My cybersecurity expertise and passion for coding allows
            me to create applications that not only meet functional requirements
            but also adhere to the highest standards of data protection.
          </p>
        </div>

        <div className='max-w-[35%] mt-4 mx-auto lg:ml-10 lg:order-2 mr-4 hidden lg:block'>
          <img src={goku} alt='goku' className='w-full h-auto rounded-lg' />
        </div>
      </div>
    </div>
  );
}

export default About;
