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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setFavorites } from '../../../store/favoritesSlice';
export default function ThingToDoCard(rec: RecType) {


  const dispatch = useDispatch()
  const toggleFavorite = async () => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        if (!rec.isFavorite) {
            let newFavorite = {
              yelp_id: rec.id,
              name: rec.name,
              imageUrl: rec.image_url,
              yelp_review_count: rec.review_count, 
              yelp_rating: (rec.rating)?.toFixed(1), 
              yelp_url: rec.url, 
              description: null,
              is_closed: rec.is_closed, 
              distance: rec.distance, 
              distanceInMiles: (rec.distance * 0.0006).toFixed(), 
              display_phone: rec.display_phone, 
              categories: rec.categories,
              location: rec.location
            }
            await axios.post("/api/favorites", newFavorite, {
              headers: {
                authorization: `Bearer ${token}`,
              },
            });
            const usersFavorites = await axios.get("/api/favorites", {
              headers: { Authorization: "Bearer " + token },
            });
            dispatch(setFavorites(usersFavorites.data));
        } else {
          const usersFavorites = await axios.put('/api/favorites/delete', rec, {headers: {
            authorization: `Bearer ${token}`,
          },})
          dispatch(setFavorites(usersFavorites.data));    
      }
    } else {
      console.log('no token')
    }
  } catch(error) {
    console.log(error)
  }
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
        {!rec.isFavorite && <Button size="small" onClick={toggleFavorite}><FavoriteBorderIcon/></Button>}
        {rec.isFavorite && <Button size="small" onClick={toggleFavorite}><FavoriteIcon/></Button>}
        <Button size="small" href={`${rec.url}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}