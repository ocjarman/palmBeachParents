import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Rating } from '@mui/material';
import { FavType } from '../../../utils/interfaces';
export default function FavCard(fav: FavType) {



  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardMedia
        component="img"
        alt="recommendation image"
        height="140"
        src={`${fav.imageUrl}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fav.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {fav.address.address1}, {fav.address.city}, {fav.address.state}, {fav.address.zip_code}
        </Typography>
        <Rating name="read-only" value={Number(fav.yelp_rating)} readOnly /> ({fav.yelp_review_count})
      </CardContent>
      <CardActions>
        {/* {!favorite && <Button size="small" onClick={toggleFavorite}><FavoriteBorderIcon/></Button>}
        {favorite && <Button size="small" onClick={toggleFavorite}><FavoriteIcon/></Button>} */}
        <Button size="small" href={`${fav.yelp_url}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}