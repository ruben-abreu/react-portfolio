import goku from '../assets/goku-learning-react-2.png';

function About() {
  return (
    <div>
      <h2 className='text-[#0174be] text-2xl font-bold '>
        About <span className='text-white'>Me</span>
      </h2>
      <div className='flex flex-col lg:flex-row lg:justify-center items-center '>
        <div className='max-w-[65%] p-4 text-justify border border-white mx-auto lg:mr-10 lg:order-2'>
          <p className='mt-12'>
            &ensp;I started as full stack developer with a transformative
            experience at Ironhack, renowned as one of the best bootcamps
            globally. The curriculum gave me with a diverse set of skills,
            ranging from front-end technologies like JavaScript and it's library
            React to back-end frameworks such as Node.js. Throughout the
            bootcamp, I did projects that simulated real-world scenarios, in an
            environment where problem-solving and creativity were constant. I
            improved not only my coding abilities but also gained a strong sense
            of teamwork, a quality essential for success in the dynamic field of
            software development.
            <p className='mt-12'>
              &ensp;I have a background in cybersecurity and as such I bring a
              unique perspective to my development work, prioritizing robust and
              secure solutions. My cybersecurity expertise and passion for
              coding allows me to create applications that not only meet
              functional requirements but also adhere to the highest standards
              of data protection.
            </p>
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
