import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RecType } from '../../../utils/interfaces';
import { Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function RecCard(rec: RecType) {
  const [favorite, setFavorite] = useState<boolean>(false)

  const toggleFavorite = () => {
    setFavorite((val) => !val)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="recommendation image"
        height="140"
        src={`${rec.image_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {rec.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rec.location.address1}, {rec.location.city}, {rec.location.state}, {rec.location.zip_code}
        </Typography>
        <Rating name="read-only" value={rec.rating} readOnly /> ({rec.review_count})
      </CardContent>
      <CardActions>
        {!favorite && <Button size="small" onClick={toggleFavorite}><FavoriteBorderIcon/></Button>}
        {favorite && <Button size="small" onClick={toggleFavorite}><FavoriteIcon/></Button>}
        <Button size="small" href={`${rec.url}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}