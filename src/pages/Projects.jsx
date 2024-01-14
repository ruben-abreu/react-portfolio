import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Quidditch from '../assets/Quidditch Maze.png';
import Pokedex from '../assets/pokedex.png';

function Projects() {
  const cardsData = [
    {
      id: 1,
      image: Quidditch,
      title: 'Quidditch Maze',
      description:
        'Harry Potter-themed game, where players navigate through a maze to reach their ultimate goal. The game offers three levels, power-ups, and a math test at the end. Built with vanilla JavaScript.',
      github: 'https://github.com/ruben-abreu/project-maze-game',
      demo: 'https://quidditch-maze.netlify.app',
    },
    {
      id: 2,
      image: Pokedex,
      title: 'Competitive Pokédex',
      description:
        'A Pokédex app for competitive Pokémon players. Users can search by name or number to retrieve Pokémon stats directly from the PokeAPI. Built with vanilla JavaScript.',
      github: 'https://github.com/ruben-abreu/competitive_pokedex',
      demo: 'https://ruben-abreu.github.io/competitive_pokedex',
    },
    {
      id: 3,
      image: 'https://www.iconbolt.com/preview/facebook/charm-icons/github.svg',
      title: 'Atlas of Conquest',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
      github: 'https://github.com/ruben-abreu/project-maze-game',
      demo: 'https://quidditch-maze.netlify.app',
    },
  ];

  return (
    <div className='mt-20'>
      <h2 className='text-white text-2xl font-bold mb-4'>
        My <span className='text-[#0174be]'>Projects</span>
      </h2>
      <div className='flex justify-center items-center bg-lightblue p-8 flex-wrap'>
        {cardsData.map(card => (
          <Card
            key={card.id}
            sx={{
              maxWidth: 345,
              bgcolor: 'inherit',
              marginRight: '1rem',
              boxShadow: '0 8px 32px 0 rgba(1, 116, 190, 0.37)', // Add this line for the glowing effect
            }}
            className='lg:h-[500px] shadow-custom' // Assuming "shadow-custom" is the class for the glowing effect in the navbar
          >
            <CardMedia
              component='img'
              alt={`Image for ${card.title}`}
              height='100'
              image={card.image}
              sx={{ height: '250px', borderRadius: '10px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'inherit',
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant='body2'
                color='white'
                sx={{
                  fontFamily: 'inherit',
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <a href={card.github} target='_blank' rel='noopener noreferrer'>
                <Button variant='contained'>
                  <GitHubIcon className='mr-1' />
                </Button>
              </a>
              <a href={card.demo} target='_blank' rel='noopener noreferrer'>
                <Button variant='contained'>Demo</Button>
              </a>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
