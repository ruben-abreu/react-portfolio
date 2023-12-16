import SkillsData from '../../public/skills/images.json';

const Skills = () => {
  const Box = ({ imageUrl, name }) => (
    <div className='flex-none p-2 m-2 text-center'>
      <div className='w-32 h-32 mx-auto rounded-md shadow-md custom-box-shadow p-5'>
        <img
          src={imageUrl}
          alt='Random'
          className='max-w-full max-h-full rounded-md'
        />
      </div>
      <p className='mt-2 text-xs md:text-base' key={name}>
        {name}
      </p>
    </div>
  );

  const boxes = SkillsData.map((skill, index) => (
    <Box key={index} imageUrl={skill.imageUrl} name={skill.name} />
  ));

  return (
    <div>
      <h2 className='text-[#0174be] text-2xl font-bold mb-4'>
        My <span className='text-white'>Skills</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center'>{boxes}</div>
    </div>
  );
};

export default Skills;
