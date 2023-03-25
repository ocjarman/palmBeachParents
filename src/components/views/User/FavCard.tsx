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
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useDispatch } from 'react-redux';
import { FavType } from '../../../utils/interfaces';
import { setFavorites } from '../../../store/favoritesSlice';
export default function FavCard(fav: FavType) {
  const [favorite, setFavorite] = useState<boolean>(false)
  const user = useSelector((state: RootState) => state.user.user)

  const dispatch = useDispatch()
//   const toggleFavorite = async () => {
//     if (!favorite) {
//       console.log('making favorite')
//       const token = window.localStorage.getItem("token");
//       if (token) {
//         let newFavorite = {
//           yelp_id: rec.id,
//           name: rec.name,
//           imageUrl: rec.image_url,
//           yelp_review_count: rec.review_count, 
//           yelp_rating: rec.rating, 
//           yelp_url: rec.url, 
//           description: null,
//           is_closed: rec.is_closed, 
//           distance: rec.distance, 
//           distanceInMiles: (rec.distance * 0.0006).toFixed(), 
//           display_phone: rec.display_phone, 
//           categories: rec.categories,
//           location: rec.location
//         }
//         await axios.post("/api/favorites", newFavorite, {
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//         });
//         const usersFavorites = await axios.get("/api/favorites", {
//           headers: { Authorization: "Bearer " + token },
//         });
//         dispatch(setFavorites(usersFavorites.data));
//       setFavorite(true)
//     } else {
//       await axios.put('/favorites/delete')
//       setFavorite(false)
//     }
//   }
// }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        
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
        <Rating name="read-only" value={fav.yelp_rating} readOnly /> ({fav.yelp_review_count})
      </CardContent>
      <CardActions>
        {/* {!favorite && <Button size="small" onClick={toggleFavorite}><FavoriteBorderIcon/></Button>}
        {favorite && <Button size="small" onClick={toggleFavorite}><FavoriteIcon/></Button>} */}
        <Button size="small" href={`${fav.yelp_url}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}