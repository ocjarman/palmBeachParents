import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RecCategoryType, RecType } from '../../../utils/interfaces';
import { Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function RecCard(recCategory: RecCategoryType) {
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
        // src={`${recCategory.image_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recCategory.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Learn More</Button>
        {/* <Button size="small" href={`${rec.url}`}>Learn More</Button> */}
      </CardActions>
    </Card>
  );
}