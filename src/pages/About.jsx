import goku from '../assets/goku-learning-react-2.png';

function About() {
  return (
    <div>
      <h2 className='text-[#0174be] text-2xl font-bold mt-11'>
        About <span className='text-white'>Me</span>
      </h2>
      <div className='flex flex-col lg:flex-row lg:justify-center items-center '>
        <div className='max-w-[65%] p-4 text-justify border border-white mx-auto lg:mr-10 lg:order-2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque lectus felis, volutpat non quam vel, hendrerit
            tincidunt tortor. Duis vel pretium felis, id tempus nibh. Donec
            scelerisque mattis tempor. Donec risus justo, pellentesque ac tortor
            in, posuere pellentesque libero. Ut in purus turpis. Proin a congue
            ante. Donec risus tortor, sollicitudin et elit vitae, consectetur
            facilisis erat. Maecenas non augue eget ex.
            <p>
              Convallis feugiat. Curabitur vitae tortor porttitor ipsum
              convallis sollicitudin eu eget lectus. Etiam semper diam non
              sapien malesuada, vitae varius est finibus. Sed sed varius justo.
              Nullam semper sem non diam condimentum pellentesque.
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
