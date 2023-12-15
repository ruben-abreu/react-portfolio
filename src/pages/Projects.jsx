import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Projects() {
  const cardsData = [
    {
      id: 1,
      image: 'https://www.iconbolt.com/preview/facebook/charm-icons/github.svg',
      title: 'Lizard 1',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
      id: 2,
      image: 'https://www.iconbolt.com/preview/facebook/charm-icons/github.svg',
      title: 'Lizard 2',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
      id: 3,
      image: 'https://www.iconbolt.com/preview/facebook/charm-icons/github.svg',
      title: 'Lizard 3',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
  ];

  return (
    <div className='flex justify-center items-center min-h-screen bg-lightblue p-8'>
      {cardsData.map(card => (
        <Card
          key={card.id}
          sx={{ maxWidth: 345, bgcolor: 'inherit', marginRight: '1rem' }}
        >
          <CardMedia
            component='img'
            alt={`Image for ${card.title}`}
            height='140'
            image={card.image}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              color='white'
              fontWeight='bold'
            >
              {card.title}
            </Typography>
            <Typography variant='body2' color='white'>
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
