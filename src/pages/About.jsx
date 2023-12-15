import goku from '../assets/goku-learning-react-2.png';

function About() {
  return (
    <div>
      <h2 className='text-[#0174be] text-2xl font-bold mb-4'>
        About <span className='text-white'>Me</span>
      </h2>
      <div className='flex flex-col lg:flex-row lg:justify-center items-center'>
        <div className='max-w-[50%] p-4 text-justify border border-white mx-auto lg:mr-10 lg:order-2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque lectus felis, volutpat non quam vel, hendrerit
            tincidunt tortor. Duis vel pretium felis, id tempus nibh. Donec
            scelerisque mattis tempor. Donec risus justo, pellentesque ac tortor
            in, posuere pellentesque libero. Ut in purus turpis. Proin a congue
            ante. Donec risus tortor, sollicitudin et elit vitae, consectetur
            facilisis erat. Maecenas non augue eget ex convallis feugiat.
            Curabitur vitae tortor porttitor ipsum convallis sollicitudin eu
            eget lectus. Etiam semper diam non sapien malesuada, vitae varius
            est finibus. Sed sed varius justo. Nullam semper sem non diam
            condimentum pellentesque.
          </p>
          <p>
            Vestibulum fringilla vitae quam id commodo. In a nunc porta ex
            tincidunt ultrices eget eu ipsum. Donec ex nulla, convallis ac
            molestie eget, eleifend et ligula. Duis sollicitudin non nulla eu
            interdum. Nulla feugiat et felis quis faucibus. Sed id sollicitudin
            purus. Sed felis nisi, mattis ac dui eu, vulputate dapibus magna.
            Curabitur sed urna vel nisl rhoncus semper. Vestibulum magna quam,
            porttitor eget posuere eu, vehicula in tortor. Fusce tristique vitae
            mi quis semper. Sed porta ex nec eros tincidunt, eget bibendum velit
            tempor. Duis ut aliquet lectus.
          </p>
        </div>
        <div className='max-w-[35%] mt-4 mx-auto lg:ml-10 lg:order-2'>
          <img src={goku} alt='goku' className='w-full h-auto rounded-lg' />
        </div>
      </div>
    </div>
  );
}

export default About;
